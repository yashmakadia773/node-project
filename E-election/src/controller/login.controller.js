const { UserService, AdminService } = require("../service");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

const UserLogin = async (req, res) => {
  try {
    // validation;
    const { cardNo, password } = req.body;

    const findUser = await UserService.Findnumber(cardNo);
    console.log(findUser);
    if (!findUser) throw Error("User not found");
    if (password != findUser.password) {
      throw new Error("Incorrect Password");
    }
    let option = {
      cardNo,
    };
    let token = await jwt.sign(option, jwtSecrectKey);

    let data;
    if (token) {
      data = await UserService.UserUpdate(findUser._id, token);
    }

    console.log(data);

    res.cookie("role", data.role);

    res.status(200).json({
      success: true,
      message: "User Login successfully!",
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const AdminLogin = async (req, res) => {
  try {
    // validation;
    const { name, password } = req.body;

    const findUser = await AdminService.Findname(name);
    console.log(findUser);

    if (!findUser) throw Error("User not found");

    if (password != findUser.password) {
      throw new Error("Incorrect Password");
    }
    let option = {
      name,
      password,
    };

    let token = await jwt.sign(option, jwtSecrectKey);

    let data;
    if (token) {
      data = await AdminService.adminUpdate(findUser._id, token);
    }

    res.status(200).json({
      success: true,
      message: "User Data Login successfully!",
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  UserLogin,
  AdminLogin,
};
