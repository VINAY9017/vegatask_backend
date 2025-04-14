const blogModel = require("../Model/blogModel");

exports.addBlog = async (request, response) => {
  try {
    const body = request.body;
    const img = request.imagePath;
    console.log(img);

    const blogData = {
      blogTitle: body.blogTitle,
      blogDescription: body.blogDescription,
      blogImage: img,
    };
    const dbRes = await blogModel.create(blogData);
    if (dbRes) {
      return response.status(201).json({
        status: "success",
        message: "Add Blog Successfully",
        data: dbRes,
      });
    }
  } catch (error) {
    return response.status(500).json({
      status: "failed",
      message: "failed to add Blog",
      error: error,
    });
  }
};

exports.getBlog = async (request, response) => {
  try {
    const dbRes = await blogModel.find();
    if (dbRes) {
      return response.status(200).json({
        status: "success",
        message: "get blog successfully",
        data: dbRes,
      });
    }
  } catch (error) {
    return response.status(500).json({
      status: "failed",
      message: "failed to get Blog",
      error: error,
    });
  }
};

exports.deleteBlog = async (request, response) => {
  try {
    const blog_id = request.params.blog_id;
    const dbRes = await blogModel.deleteOne({ _id: blog_id });
    if (dbRes) {
      response.status(200).json({
        status: "Success",
        message: "Successfully Delete User",
        data: dbRes,
      });
    }
  } catch (error) {
    console.log(error);

    return response.status(500).json({
      status: "failed",
      message: "failed to delete user",
    });
  }
};

exports.updateBlog = async (request, response) => {
  try {
    const blog_id = request.params.blog_id;
    const img = request.imagePath;
    const body = request.body;
    const updateBlog = {
      blogTitle: body.blogTitle,
      blogDescription: body.blogDescription,
      blogImage: img,
    };
    const dbRes = await blogModel.updateOne({ _id: blog_id }, updateBlog);
    if (dbRes) {
      response.json({
        status: "success",
        message: "update successfully",
        data: dbRes,
      });
    }
  } catch (error) {
    console.log(error);

    response.json({
      status: "failed",
      message: "failed to update",
    });
  }
};
