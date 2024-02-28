var express = require("express");
var router = express.Router();
var blogController = require("../controllers/blogController");

/* GET home page. */
router.post("/saveblog", blogController.saveblog);

router.get("/allblogs", blogController.getAllBlogs);

router.post("/getblogbyid", blogController.getBlogById);

module.exports = router;
