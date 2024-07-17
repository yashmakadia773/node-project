const { PartyListModel} = require("../model");

//create
    const CreatePartyList =     async (reqBody) =>{
         return  (await (await PartyListModel.create(reqBody)).populate("party")).populate("election");
    }
    //find PartyList name
const FindName = async (party) => {
    return PartyListModel.findOne({ party });
}
// PartyList list
const PartyAllList = async (req, res) => {
    return PartyListModel.find().populate("party").populate("election");
};
//PartyList id
const PartyListId = async (listId) => {
    return PartyListModel.findById(listId)
};
//delete PartyList
const DeletePartyList = async (listId) => {
    return PartyListModel.findByIdAndDelete(listId)
};
module.exports = {
    CreatePartyList,
    FindName,
    PartyAllList,
    PartyListId,
    DeletePartyList,
}