const express = require("express");
const { signup, login } = require("../Controller/authController");
const upload = require("../Middleware/profileImageMiddleware");

const authRoute = express.Router();

authRoute.post("/signup", upload.single("profileImage"), signup);
authRoute.post("/login",login)

module.exports = authRoute;
