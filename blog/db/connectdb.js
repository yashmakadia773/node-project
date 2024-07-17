let mongoose = require("mongoose");

let connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("database connected succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
