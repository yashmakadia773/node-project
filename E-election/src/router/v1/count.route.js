const { CountController } = require("../../controller");
const express = require("express");
const router = express.Router();

//vote list
router.get("/count" ,
CountController.Count
)

module.exports =router;