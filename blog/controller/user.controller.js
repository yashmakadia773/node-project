const { createToken } = require("../middleware/auth");
const uploadImage = require("../middleware/cloudinary");
const { userService } = require("../service");

let getUserList = async (req, res) => {
  try {
    let result = await userService.getUserList();

    if (!result) {
      throw new Error("Something Went Wrong");
    }
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

let loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(res.user);
    let result = await userService.loginUser(email);
    if (!result) {
      throw new Error("Something Went Wrong");
    }
    if (result.password !== password) {
      throw new Error("Password is incorrect");
    }
    let token = createToken({ result });

    res.cookie("token", token);
    res.cookie("user_id",result._id)

    res.status(200).json({
      status: "user login succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to login user",
      error: error.message,
    });
  }
};

let addUser = async (req, res) => {
  try {
    let body = req.body;
    let profile = req.file;

    let imgPath = profile.path;

    let CloudPath = await uploadImage(imgPath);

    let finalData = {
      ...body,
      profile: profile.path,
      CloudImg: CloudPath.url,
    };
    let { email } = body;

    let duplicate = await userService.duplicate(email);

    if (duplicate) {
      throw new Error("Email already exist");
    }

    let result = await userService.addUser(finalData);
    if (!result) {
      throw new Error("Something Went Wrong");
    }

    res.status(200).json({
      status: "user added succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to add user",
      error: error.message,
    });
  }
};

let deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("🚀 ~ deleteUser ~ id:", id);
    let result = await userService.deleteUser(id);

    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let updateUser = async (req, res) => {
  try {
    let body = req.body;
    let { id } = req.params;

    let result = await userService.upadteUser(id, body);
    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: body,
      oldData: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getUserList, addUser, deleteUser, updateUser, loginUser };
