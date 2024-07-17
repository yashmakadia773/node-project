const express = require("express");
const routes = express.Router();
const userRoutes = require("./user.route");
const ticketRoutes = require("./ticket.route");
const movieRoutes = require("./movie.route");


routes.use("/user",userRoutes);
routes.use("/ticket",ticketRoutes);
routes.use("/movie",movieRoutes);


module.exports = routes;