let express = require("express");
const { userController } = require("../controller");
const { isLogin, otpmake } = require("../middleware/auth");
const { upload } = require("../middleware/multer");
let route = express.Router();

route.get("/userList", isLogin, userController.getUserList);
route.post(
  "/userAdd",
  upload.single("profile"),
  otpmake,
  userController.addUser
);
route.post("/userLogin", userController.loginUser);
route.delete("/deleteUser/:id", userController.deleteUser);
route.put("/updateUser/:id", userController.updateUser);

module.exports = route;
