const express = require("express");
const { ticketController } = require("../controllers");

const route = express.Router();

route.get("/get", ticketController.getticket);
route.post("/add",ticketController.addticket);
route.delete("/delete/:id",ticketController.deleteticket);
route.put("/update/:id",ticketController.updateticket);


module.exports = route;