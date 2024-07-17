const { LoginController} = require("../../controller");
const express = require("express");
const router = express.Router();

//login
router.post("/user" ,
LoginController.UserLogin
)
router.post("/admin" ,
 LoginController.AdminLogin )
module.exports = router;    