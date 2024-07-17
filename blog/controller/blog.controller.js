const { BlogService } = require("../service");

let getBlog = async (req, res) => {
  try {
    let result = await BlogService.getBlog();
    if (!result) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Blogs get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let addBlog = async (req, res) => {
  try {
    let body = req.body;

    let final;
    let result = await BlogService.postBlog(body);
    if (!result) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Blog added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await BlogService.deleteBlog(id);

    if (!result) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let updateBlog = async (req, res) => {
  try {
    let body = req.body;
    let { id } = req.params;

    let result = await BlogService.updateBlog(id, body);
    if (!result) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: body,
      oldData: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getBlog, addBlog, deleteBlog, updateBlog };
