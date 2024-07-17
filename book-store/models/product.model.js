let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  bookName: {
    type: String,
  },
  bookImage: {
    type: String,
  },
  autherName: {
    type: String,
  },
  price: {
    type: Number,
  },
  discription: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

let productData = mongoose.model("productSchema", productSchema);
module.exports = productData;

