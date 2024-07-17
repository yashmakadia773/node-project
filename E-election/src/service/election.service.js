const { ElectionModel } = require("../model");

//create Election
const CreateElection = async (reqBody) => {
    return ElectionModel.create(reqBody)
};
// Election list
const ElectionList = async (req, res) => {
    return ElectionModel.find()
};
//Election id
const ElectionId = async (electionId) => {
    return ElectionModel.findById(electionId)
};
//delete Election
const DeleteElection = async (electionId) => {
    return ElectionModel.findByIdAndDelete(electionId)
};
//find  electionname
const Findname = async (election_name) => {
    return ElectionModel.findOne({ election_name });
}
//module export
module.exports = {
 CreateElection,
 ElectionList,
 ElectionId,
 DeleteElection,
 Findname
}