const joi  =require("joi");

//create partylistlist
const Createpartylist = {
    body :joi.object().keys({
        party : joi.string().trim().required(),
        election : joi.string().trim().required(),
    })
};

module.exports = {
    Createpartylist
}