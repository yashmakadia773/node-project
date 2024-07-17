let express = require("express");
const { userController } = require("../controller");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.get(
  "/get",
  isLogin,
  isRestrict(["admin", "user"]),
  userController.getUser
);
route.post("/login", userController.login);
route.post("/register", userController.register);

module.exports = route;
