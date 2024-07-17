const { productSchema } = require("../models");

let getProduct = () => {
  return productSchema.find();
};

let postProduct = (body) => {
  return productSchema.create(body);
};

let deleteProduct = (id) => {
  return productSchema.findByIdAndDelete(id);
};

let updateProduct = (id, body) => {
  return productSchema.findByIdAndUpdate(id, body);
};

module.exports = { getProduct, postProduct, deleteProduct, updateProduct };
