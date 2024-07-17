const joi  =require("joi");

//create party
const CreateParty = {
    body :joi.object().keys({
        party_name : joi.string().trim().min(2).max(10).required(),
        party_logo : joi.string().allow(""),
        short_code : joi.string().min(3).max(50).required(),
    })
};

module.exports = {
    CreateParty
}