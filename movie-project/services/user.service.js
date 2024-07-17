const { userSchema } = require("../models");

const getuser = () => {
  return userSchema.find();
};

const adduser = (body) => {
  return userSchema.create(body);
};

const deleteuser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

const getuserByuserName = (userName) => {
  // console.log(userName);
return userSchema.findOne( {userName} );
};

const updateuser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
};
module.exports = { getuser, adduser, deleteuser, updateuser, getuserByuserName };
