const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");

/* 
@route POST api/posts
@desc Create new post
@access Private
 */

router.get(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { text, name, profileImage } = { ...req.body };
    const newPost = new Post({
      text,
      name,
      profileImage,
      user: req.user.id
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

module.exports = router;
