const { userService } = require("../services");

//get method
const getuser = async (req, res) => {
  const user = await userService.getuser();

  console.log(user, "get");

  res.status(200).json({
    message: "User get success",
    data: user,
  });
};

//post method

const adduser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getuserByuserName(body.userName);

    if (userExist) {
      throw new Error("user already exist");
    }

    const user = await userService.adduser(body);

    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// delete method

const deleteuser = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const user = await userService.deleteuser(id);
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// update method

const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const userExist = await userService.getuserByuserName(body.userName);

    if (userExist) {
      throw new Error("user already exist");
    }
    const user = await userService.updateuser(id, body);

    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "user updated success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { getuser, adduser, deleteuser, updateuser };
