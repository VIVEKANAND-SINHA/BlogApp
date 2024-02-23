const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User model
const userSchema = new Schema({
  username: String,
  lastname: { type: String, default: "" },
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// Post model
const postSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  User,
  Post,
};
