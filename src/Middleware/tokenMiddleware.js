
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.blogMiddleware = (request, response, next) => {
    try {
        const token = request.headers["authorization"].split(" ")[1];
        const verified = jwt.verify(token, process.env.SECRETKEY)
        if (verified) {
            request.id=verified.user_id,
            next()
        }
        else {
            response.json({
                status: "failed",
                message: "unauthorized token was expired"
            })
        }
    }
    catch(error) {
        console.log(error)
        response.json({
            status: "failed",
            message: "unauthorized token"
        })
    }
}