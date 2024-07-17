const { AdminController } = require("../../controller");
const express = require("express");
const {AdminValidation} =require("../../validation");
const validate = require("../../middlewares/validate");
const router = express.Router();

//user create
router.post("/create" ,
validate(AdminValidation.CreateAdmin),
AdminController.CreateAdmin
)

module.exports = router;