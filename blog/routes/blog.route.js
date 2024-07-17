let express = require("express");
const { blogController } = require("../controller");
const { isLogin } = require("../middleware/auth");
let route = express.Router();

route.get("/getBlog", blogController.getBlog);
route.post("/addBlog", isLogin, blogController.addBlog);
route.delete("/deleteBlog/:id", blogController.deleteBlog);
route.put("/updateBlog/:id", blogController.updateBlog);

module.exports = route;
