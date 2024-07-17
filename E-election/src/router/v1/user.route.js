const { UserController } = require("../../controller");
const express = require("express");
const {UserValidation} =require("../../validation");
const validate = require("../../middlewares/validate");
const router = express.Router();

//user create
router.post("/create" ,
validate(UserValidation.CreateUser),
UserController.CreateUser
)

//user list
router.get("/list" ,
UserController.UserList
)
//user id
router.get("/finduser/:userId",
    UserController.UserId
);

//delete user
router.delete("/delete/:userId",
    UserController.DeleteUser
);
module.exports = router;