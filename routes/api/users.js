const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const passport = require("passport");

//JWT
const jwt = require("jsonwebtoken");
const secretOrKey = require("../../config/keys").secretOrKey;

//load user model
const User = require("../../models/User");

//@route  GET    api/users/test
//@access Test   user route
//@access Public
router.get("/test", (req, res) => {
  res.json({ msg: "user route works" });
});

//@route  GET    api/users/register
//@access Test   user route
//@access Public
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    //if user found with same email
    if (user) {
      return res.status(400).json({ err: "email already exists" });
    } else {
      const newUser = new User(
        ({ name, email, password, userImage } = { ...req.body })
      );

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) {
            console.error(err);
          } else {
            newUser.password = hash;
            const savedUser = await newUser.save();
            res.json({ savedUser });
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//@route  POST    api/users/register
//@desc   Login user / gen JWT
//@access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "No user found with this email address." });
  }

  //if user check PW
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (passwordMatched) {
    const payload = {
      id: user.id,
      name: user.name,
      userImage: user.userImage,
      permission: user.permission
    };

    jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        success: true,
        payload,
        token: `Bearer ${token}`
      });
    });
  } else {
    res.json({ msg: "sorry, something went wrong" });
  }
});

/**
 * @route  GET    api/users/current
 * @desc   return current user
 * @access  Private
 **/

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        userImage: req.user.userImage
      });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  }
);

module.exports = router;
