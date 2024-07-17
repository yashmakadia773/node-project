const joi = require("joi");

//create vote
const Createvote = {
    body: joi.object().keys({
        user: joi.string().trim().required(),
        // partylist : joi.string().trim().required(),
        election: joi.string().trim().required(),
        party: joi.string().trim().required(),
    })
};

module.exports = {
    Createvote
}