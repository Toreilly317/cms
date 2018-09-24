const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  /* MAIN POST INFO */
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  title: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  images: {
    featured: { type: String },
    thumbnails: { type: String }
  },

  lastUpdated: {
    type: Date,
    default: Date.now
  },

  lastUpdatedBy: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  status: {
    type: String,
    enum: [
      "published",
      "awaiting approval",
      "revisions needed",
      "draft",
      "deleted"
    ],
    default: "draft"
  },

  /* META */
  tags: {
    type: [String]
  },

  keywords: {
    type: [String]
  },

  /* COMMENTS AND LIKES */
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      title: {
        type: String,
        require: true
      },
      text: {
        type: String,
        required: true
      }
    }
  ],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = Post = mongoose.model("post", PostSchema);
