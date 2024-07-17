let mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "userSchema",
  },
});

let blogData = mongoose.model("blogSchema", blogSchema);

module.exports = blogData;
