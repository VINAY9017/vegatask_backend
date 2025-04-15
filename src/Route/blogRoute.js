const express = require("express");
const blogUpload = require("../Middleware/blogMiddleware");
const { addBlog, getBlog, deleteBlog, updateBlog } = require("../Controller/blogController");
const { blogMiddleware } = require("../Middleware/tokenMiddleware");

const blogRoute = express.Router();

blogRoute.use(blogMiddleware)
blogRoute.post("/addblog", blogUpload.single("blogImage"), addBlog);
blogRoute.get("/getblog",getBlog)
blogRoute.delete("/deleteblog/:blog_id",deleteBlog)
blogRoute.put("/updateblog/:blog_id", blogUpload.single("blogImage"),updateBlog)

module.exports = blogRoute;
