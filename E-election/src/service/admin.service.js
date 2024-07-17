const { AdminModel } = require("../model");

//create user
const CreateAdmin = async (body) => {
    return AdminModel.create(body)
};
//find  username
const Findname = async (name) => {
    return AdminModel.findOne({name });
}

const adminUpdate = async (_id, token) => {
    return await AdminModel.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};
//module export
module.exports = {
    CreateAdmin,
    Findname,
    adminUpdate
}