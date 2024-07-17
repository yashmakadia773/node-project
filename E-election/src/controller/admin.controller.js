const { AdminService } = require("../service");

//crete admin
const CreateAdmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const cardno = await AdminService.Findname(reqBody.name);
    if (cardno) {
      throw new Error(
        "name Already Created By this number (" +
          cardno.name +
          ") Please Create By this name..!"
      );
    }
    let admin = await AdminService.CreateAdmin(reqBody);
    if (!admin) {
      throw new Error(" admin Not Created , Please Try  Again Later");
    }

    res.status(200).json({
      success: true,
      message: " SuccessFully  Admin Created ..!",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  CreateAdmin,
};
