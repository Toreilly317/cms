const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  profileImage: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      profileImage: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      lastUpdated: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        default: "unpublished"
      }
    }
  ]
});

module.exports = Post = mongoose.model("post", PostSchema);
