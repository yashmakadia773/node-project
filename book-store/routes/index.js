let express = require("express");
let userRoute = require("./user.route");
let productRoute = require("./product.route");
let routes = express.Router();

routes.use("/user", userRoute);
routes.use("/product", productRoute);

module.exports = routes;
