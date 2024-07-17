const { blogSchema } = require("../model");

let getBlog = () => {
  return blogSchema.find();
};

let postBlog = (body) => {
  return blogSchema.create(body);
};

let deleteBlog = (id) => {
  return blogSchema.findByIdAndDelete({ _id: id });
};

let updateBlog = (id, body) => {
  return blogSchema.findByIdAndUpdate({ _id: id }, { body });
};

module.exports = { getBlog, postBlog, deleteBlog, updateBlog };
