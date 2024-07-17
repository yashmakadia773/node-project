let express = require("express");
let app = express();
let cors = require("cors");
const connectDB = require("./db/connectdb");
const cookie = require("cookie-parser");
const router = require("./routes");
require("dotenv").config();

app.use(cors("*"));

connectDB();

app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
