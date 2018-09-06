const express = require("express");
const mongoose = require("mongoose");
const DB = require("./config/keys").mongoURI;
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//load middleware
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///connect to DB
mongoose
  .connect(
    DB,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to database"));

app.get("/", (req, res) => {
  res.send("hello");
});

//passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);

//use routes
app.use("/api/users", users);
app.use("api/posts", posts);
app.use("/api/profile", profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
