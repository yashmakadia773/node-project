const { productService } = require("../service");

let getProduct = async (req, res) => {
  try {
    let result = await productService.getProduct();

    if (!result) {
      throw new Error("Something went wrong");
    }
    res.status(200).json({
      message: "Product get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let postProduct = async (req, res) => {
  try {
    let body = req.body;
    let file = req.file;
    console.log("🚀 ~ postProduct ~ file:", file);

    let finalData = {
      ...body,
      img_path: file.path,
      filename: file.filename,
    };

    let result = await productService.postProduct(finalData);

    if (!result) {
      throw new Error("Something went wrong");
    }
    res.status(201).json({
      message: "Product added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("🚀 ~ deleteProduct ~ id:", id);
    let result = await productService.deleteProduct(id);

    if (!result) {
      throw new Error("Product not found");
    }
    res.status(200).json({
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let updateProduct = async (req, res) => {
  try {
    let body = req.body;
    let { id } = req.params;
    let result = await productService.updateProduct(id, body);
    if (!result) {
      throw new Error("Product not found");
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
module.exports = { getProduct, postProduct, deleteProduct, updateProduct };
