const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const passport = require("passport");

//JWT
const jwt = require("jsonwebtoken");
const secretOrKey = require("../../config/keys").secretOrKey;

//load user model
const User = require("../../models/User");

//validation
const validateRegistration = require("../../validation/register");
const validateLogin = require("../../validation/login");

router.get("/test", (req, res) => {
  res.json({ msg: "ok" });
});

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const adminExists = await User.findOne({ permission: "ADMIN" });
  if (!adminExists) {
    req.body.permission = "admin";
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    }

    const newUser = new User(
      ({
        name,
        email,
        profileImage,
        password: req.body.password,
        permission: req.body.permission
      } = {
        ...req.body
      })
    );

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      firstName: req.user.lastName,
      email: req.user.email,
      date: req.user.date
    });
  }
);

module.exports = router;
