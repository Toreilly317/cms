const express = require("express");
const mongoose = require("mongoose");
const DB = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

mongoose.connect(DB).then(() => console.log("MongoDB Connected"));

app.get("/", (req, res) => {
  res.send("hello");
});

//use routes
app.use("/api/users", users);
app.use("api/posts", posts);
app.use("/api/profile", profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
