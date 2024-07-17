const { VoteModel} = require("../model");

//create
    const CreateVote =     async (reqBody) =>{
         return  (await (await (await VoteModel.create(reqBody)).populate("user" ,{_id:0 , is_active :0 , createdAt:0 , updatedAt:0})).populate("election" ,{election_name:1 ,date:1, _id:0})).populate("party" , {party_name :1 , party_logo:1 ,short_code:1 , _id:0 });
    }
    //find Vote Id
const FindName = async (user) => {
    return VoteModel.findOne({ user });
}
// Vote list
const VoteList = async (req, res) => {
    return VoteModel.find().populate("user" ,{_id:0 , is_active :0 , createdAt:0 , updatedAt:0}).populate("party" , {party_name :1 , party_logo:1 ,short_code:1 , _id:0 }).populate("election" ,{election_name:1 ,date:1, _id:0});
};
//Vote id
const VoteId = async (voteId) => {
    return VoteModel.findById(voteId)
};
//delete Vote
const DeleteVote = async (voteId) => {
    return VoteModel.findByIdAndDelete(voteId)
};
module.exports = {
    CreateVote,
    FindName,
    VoteList,
    VoteId,
    DeleteVote,
}