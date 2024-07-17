const joi  =require("joi");

//create election
const CreateElection = {
    body :joi.object().keys({
        election_name : joi.string().trim().min(2).max(15).required(),
        date : joi.string().trim().min(5).max(50).required(),
    })
};

module.exports = {
    CreateElection
}