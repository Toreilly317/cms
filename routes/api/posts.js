const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Models
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

//validation
const validatePostData = require("../../validation/post");

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
  (req, res) => {
    // Check Id of owner post
    Post.findOneAndDelete({ _id: req.params.id, owner: req.user.id })
      .then(post => {
        return !post
          ? res.status(401).json({ post: "post not found" })
          : res.status(200).json({ post: "post deleted" });
      })
      .catch(err =>
        res.status(404).json({ post: "It had a problem deleting the post" })
      );
  }
);

module.exports = router;
