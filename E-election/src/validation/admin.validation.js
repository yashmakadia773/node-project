const joi  =require("joi");

//create user
const CreateAdmin = {
    body :joi.object().keys({
        name : joi.string().trim().min(5).max(50).required(),
        password : joi.string().min(3).max(10).required(),
    })
};

module.exports = {
    CreateAdmin
}