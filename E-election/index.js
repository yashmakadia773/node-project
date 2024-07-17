const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const { connectDB } = require("./src/db/dbconnection");
const config = require("./src/config/config");
const router = require("./src/router/v1");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(cors());
app.options("*", cors());
app.use(express.static(path.join(__dirname, `./public`)));
app.use(bodyparser.json());
app.use("/v1", router);
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

//databse connect
connectDB();
// simple server create
http.createServer(app).listen(config.port, () => {
  console.log(`Server SuccessFully Listing PORT Number in ${config.port}!...`);
});
