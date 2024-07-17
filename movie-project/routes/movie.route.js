const express = require("express");
const validate = require("../middlewares/validate");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");

const route = express.Router();

route.get("/get", movieController.getmovie);
route.post("/add",validate(movieValidation.addmovie),movieController.addmovie);
route.delete("delete/:id",movieController.deletemovie);
route.put("/update/:id",validate(movieValidation.addmovie),movieController.updatemovie);


module.exports = route;