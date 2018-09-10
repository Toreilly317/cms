const express = require("express");
const router = express.Router();
const passport = require("passport");

//Models
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

//utils
const cleanPromise = require("../../utils/cleanPromise");

//validation
const validatePostData = require("../../validation/post");
const validatePostComment = require("../../validation/postComment");

/* 
@route GET api/posts
@desc get all posts
@access Public
 */
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ noPostsFound: "No posts found" }));
});

/*
@route GET api/posts
@desc find post by ID
@access Public
*/

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.json(post);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noPostFound: `No post found with ID ${req.params.id}` })
    );
});

/* 
@route POST api/posts
@desc Create new post
@access Private
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { text, name, profileImage } = { ...req.body };

    const { errors, isValid } = validatePostData(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    console.log(req.user);

    const newPost = new Post({
      text,
      name,
      profileImage,
      owner: req.user.id
    });

    const post = newPost
      .save()
      .then(post => {
        res.json({ post });
      })
      .catch(e => {
        console.log(e);
      });
  }
);

/* 
@route DELETE api/posts/:id
@desc Create new post
@access Private
 */

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // Check Id of owner post
    try {
      const post = await Post.findOne({ _id: req.params.id });
      if (
        post.owner.toString() === req.user.id ||
        req.user.permission === "admin"
      ) {
        try {
          post.remove();
          res.json({ msg: "Post Deleted" });
        } catch (error) {
          // remove post failed
          res.status(400).json(error);
        }
      }
    } catch (error) {
      // find post failed
      return res.status(400).json(error);
    }
  }
);

// @route   POST api/posts/like/:id
// @desc    Like and unlike post
// @access  Private
router.post(
  ["/like/:postId", "/unlike/:postId"],
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { postId } = req.params;

    try {
      const foundPost = await Post.findById(postId);

      const indexOfUser = foundPost.likes.findIndex(
        like => like.user.toString() === req.user.id
      );

      if (indexOfUser === -1) {
        foundPost.likes.push({ user: req.user.id });
      } else {
        foundPost.likes.splice(indexOfUser, 1);
        return res.status(200).json({ message: `Post Liked!` });
      }

      //Save post
      const savedPost = await foundPost.save();
      res.status(200).json(savedPost);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: `Sorry something went wrong` });
    }
  }
);

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePostComment(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    try {
      const post = await Post.findById(req.params.id);

      // Add to comments array
      const newComment = {
        text: req.body.text,
        user: req.user.id
      };
      post.comments.unshift(newComment);

      try {
        const savedPost = await post.save();
        return res.json(savedPost);
      } catch (error) {
        return res.status(400).json(error);
      }
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const commentIndex = post.comments.findIndex(
        comment => comment._id.toString() === req.params.comment_id
      );
      post.comments.splice(commentIndex, 1);

      //Save Post
      try {
        post.save().then(post => res.json(post));
      } catch (errors) {
        //save failed
        res.status(400).json(errors);
      }
    } catch (errors) {
      // find post failed
      return res.status(404).json({ errors });
    }
  }
);

module.exports = router;
