const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

const route = express.Router();

route.get("/get", userController.getuser);
route.post("/add", validate(userValidation.adduser), userController.adduser);
route.delete("/delete/:id", userController.deleteuser);
route.put("/update/:id",validate(userValidation.adduser),userController.updateuser);


module.exports = route;