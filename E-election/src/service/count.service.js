const { VoteModel} = require("../model");

const BJPList = async () => {
    return VoteModel.find().populate("user" ,{_id:0 , is_active :0 , createdAt:0 , updatedAt:0}).populate("party" , {party_name :1 , party_logo:1 ,short_code:1 , _id:0 }).populate("election" ,{election_name:1 ,date:1, _id:0})
};

module.exports = {
BJPList
}