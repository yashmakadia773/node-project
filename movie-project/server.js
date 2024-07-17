require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const connectDB = require("./db/dbconnect");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection file
app.use("/v1", routes);


connectDB();

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});