const joi  =require("joi");

//create user
const CreateUser = {
    body :joi.object().keys({
        cardNo : joi.string().trim().min(10).max(10).required(),
        name : joi.string().trim().min(5).max(50).required(),
        fatherName : joi.string().trim().min(5).max(50).required(),
        sex : joi.string().valid('male', 'female', 'non-binary').required(),
        dob : joi.string().trim().required(),
        address :joi.string().min(3).max(255).required(),
        assemblyNoandName :joi.string().min(3).max(70).required(),
        partNoandName : joi.string().min(3).max(60).required(),
        password : joi.string().min(3).max(10).required(),
    })
};

module.exports = {
     CreateUser
}