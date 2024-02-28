const { User, Post } = require("../models/models");

var blogController = {};

const saveblog = async (req, res) => {
  try {
    var content = req.body.content;
    var title = req.body.title;

    var results = await Post.insertMany({ content: content, title: title });

    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    var allblogs = await Post.find();
    res.status(200).json(allblogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    var blog = await Post.find({ _id: req.body.id });
    console.log(blog[0]._id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

blogController.getBlogById = getBlogById;
blogController.getAllBlogs = getAllBlogs;
blogController.saveblog = saveblog;
module.exports = blogController;
