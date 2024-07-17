const { UserService } = require("../service");

//crete user
const CreateUser = async (req, res) => {
    try {
        const reqBody = req.body;
              const cardno = await UserService.Findnumber(reqBody.cardNo);
              if(cardno){
                   throw new Error("number Already Created By this number ("+cardno.cardNo+") Please Create By this number..!")
              }
        let user = await UserService.CreateUser(reqBody);
        if (!user) {
            throw new Error(" User Not Created , Please Try  Again Later");
        };

        res.status(200).json({
            success: true,
            message: " SuccessFully  User Created ..!",
            data: user
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//User List
const UserList = async (req, res) => {
    try {
        const List = await UserService.UserList(req, res);
        res.status(200).json({
            success: true,
            message: " User Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

const UserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully User List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete user
const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        await UserService.DeleteUser(userId);
        res.status(200).json({
            success: true,
            message: "Suucessfully User Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports ={
     CreateUser,
     UserList,
     DeleteUser,
     UserId
}