const express = require("express");
const authRoute = require("./src/Route/authRoute");
const blogRoute = require("./src/Route/blogRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("image", express.static(__dirname + "/public/uploads"));
app.use("blogImage", express.static(__dirname + "/public/blogs"));
app.use("/auth/api/v1", authRoute);
app.use("/blog/api/v1", blogRoute);

module.exports = app;
