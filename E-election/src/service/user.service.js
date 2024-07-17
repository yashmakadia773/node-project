const { UserModel } = require("../model");

//create user
const CreateUser = async (body) => {
    return UserModel.create(body)
};
// user list
const UserList = async (req, res) => {
    return UserModel.find()
};
//user id
const UserId = async (userId) => {
    return UserModel.findById(userId)
};
//delete user
const DeleteUser = async (userId) => {
    return UserModel.findByIdAndDelete(userId)
};
//find  username
const Findnumber = async (cardNo) => {
    return UserModel.findOne({cardNo  });
}

const UserUpdate = async (_id, token) => {
    return await UserModel.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};
//module export
module.exports = {
    CreateUser,
    UserList,
     Findnumber,
     UserId,
    DeleteUser,
    UserUpdate
}