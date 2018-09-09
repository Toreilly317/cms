module.exports = __RESET_USERS_AND_POSTS__ = async SHOULD_RESET => {
  if (SHOULD_RESET) {
    const User = require("../models/User");
    const Post = require("../models/Post");

    const results = {};

    try {
      const usersRemoved = await User.deleteMany({});
      const postsRemoved = await Post.deleteMany({});

      if (!usersRemoved) {
        results.users = "Error removing users";
      } else {
        results.users = "Successfully Removed Users";
      }

      if (!postsRemoved) {
        results.users = "Error removing users";
      } else {
        results.posts = "Successfully Removed Posts";
      }
    } catch (e) {
      results.errors = console.error(e);
    }
    console.table(results);
  }
};
