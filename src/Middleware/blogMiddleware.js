const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/blogs",
  filename: function (req, file, cb) {
    const suffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const path='IMG'+suffix+"."+file.originalname.split(".")[1]
    req.imagePath=path
    cb(null,path)
  },
});
const blogUpload=multer({storage:storage})

module.exports=blogUpload