require("dotenv").config();
let http = require("http");
let express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDb");
const routes = require("./routes");
let cors = require("cors");
let app = express();

app.use(
  cors({
    origin: "*",
  })
);
// body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// connect Database
connectDB();

// routes
app.use("/v1", routes);

// server start
http.createServer(app).listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
