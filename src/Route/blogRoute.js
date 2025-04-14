const express = require("express");
const blogUpload = require("../Middleware/blogMiddleware");
const { addBlog, getBlog, deleteBlog, updateBlog } = require("../Controller/blogController");

const blogRoute = express.Router();

blogRoute.post("/addblog", blogUpload.single("blogImage"), addBlog);
blogRoute.get("/getblog",getBlog)
blogRoute.delete("/deleteblog/:blog_id",deleteBlog)
blogRoute.put("/updateblog/:blog_id", blogUpload.single("blogImage"),updateBlog)

module.exports = blogRoute;
