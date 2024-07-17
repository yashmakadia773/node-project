let jwt = require("jsonwebtoken");
const sendEmail = require("../service/email.service");

let createToken = (data) => {
  return (token = jwt.sign(data, process.env.SECRET_TOKEN));
};

let isLogin = (req, res, next) => {
  try {
    let token = req.cookies["token"];
    if (!token) {
      throw new Error("User Not Login");
    }
    let decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

let otpmake = async (req, res, next) => {
  let number = `${Math.floor(1000+Math.random()*9000)}`
    await sendEmail(req.body.email, "OTP", `Your OTP is ${number}`);
  req.otp = number;
  next();
};


module.exports = { createToken, isLogin, otpmake };
