const { userService } = require("../service");
const { createToken } = require("../middleware/auth");

let getUser = async (req, res) => {
  try {
    let result = await userService.getUser();
    res.status(200).json({
      status: "user get succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to get user",
      error: error.message,
    });
  }
};

let register = async (req, res) => {
  try {
    let body = req.body;

    // check duplicate

    let duplicate = await userService.duplicateUser(body.email);

    if (duplicate) {
      throw new Error(`this email "${duplicate.email}" already exist`);
    }

    let result = await userService.register(body);

    if (!result) {
      throw new Error("something wents wrong");
    }

    res.status(201).json({
      status: "user created succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to create user",
      error: error.message,
    });
  }
};

let login = async (req, res) => {
  try {
    let body = req.body;
    console.log("🚀 ~ login ~ body:", body)

    let { email, password } = body;
    let result = await userService.login(email);

    if (!result) {
      throw new Error("pls check email");
    }
    if (result.password !== password) {
      throw new Error("pls check password");
    }

    let token = createToken({ result });

    res.cookie("token", token);

    res.status(201).json({
      status: "login succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to login",
      error: error.message,
    });
  }
};

module.exports = { getUser, login, register };
