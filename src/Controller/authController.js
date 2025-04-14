const authModel = require("../Model/authModel");
const { passwordEncoded, expireTokenTime } = require("../Utils/utils");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.signup = async (request, response) => {
  try {
    const body = request.body;
    const img = request.imagePath;
    const authData = {
      name: body.name,
      email: body.email,
      password: body.password,
      profileImage: img,
    };
    const dbRes = await authModel.create(authData);
    if (dbRes) {
      return response.status(201).json({
        status: "success",
        message: "Signup sucessfully",
        data: dbRes,
      });
    }
  } catch (error) {
    return response.status(500).json({
      status: "failed",
      message: "failed to signup",
      error: error,
    });
  }
};

exports.login = async (request, response) => {
  try {
    const body = request.body;
    const query = {
      email: body.email,
    };
    const dbRes = await authModel.findOne(query);
    if (dbRes) {
      if (passwordEncoded(body.password, dbRes.password)) {
        const secretKey = process.env.SECRETKEY;
        const payload = {
          name: dbRes.name,
          email: dbRes.email,
          _id: dbRes._id,
          time: Date(),
        };
        const token = jwt.sign(payload, secretKey, expireTokenTime());
        return response.status(200).json({
          status: "success",
          message: "Login successfully",
          token: token
        });
      } else {
        return response.status(500).json({
          status: "failed",
          message: "Email and Password is Incorrect 2",
        });
      }
    } else {
      return response.status(500).json({
        status: "failed",
        message: "Email and Password is Incorrect 1",
      });
    }
  } catch (error) {
    console.log(error);
    
    return response.status(500).json({
      status: "failed",
      message: "failed to login",
      error: error,
    });
  }
};
