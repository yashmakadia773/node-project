const { VoteService} = require("../service");
const {VoteModel} =require("../model");
//create  vote
const CreateVote = async (req, res) => {
    try {
        const reqBody = req.body;
        const PartyEx = await VoteService.FindName(reqBody.user);
        if (PartyEx) {
            throw new Error("User  Already Vote list Created => " + PartyEx.user);
        }
        let party = await VoteService.CreateVote(reqBody);
        if (!party) {
            throw new Error(" party Vote Not Created , Please Try  Again Later");
        };
        res.status(200).json({
            success: true,
            message: " SuccessFully Party Vote List Data  Created ..!",
            data: party
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// List
const VoteAllList = async (req, res) => {
    try {
        const List = await VoteService.VoteList(req, res);
        res.status(200).json({
            success: true,
            message: "Party Vote SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Id find
const VoteId = async (req, res) => {
    try {
        const voteId = req.params.voteId;
        const ID = await VoteService.VoteId(voteId);
        if (!ID) {
            throw new Error("Party Vote Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Party Vote Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};


//vote delete
const DeleteVote = async (req, res) => {
    try {
        const voteId = req.params.voteId;
        const ID = await VoteService.VoteId(voteId);
        if (!ID) {
            throw new Error("Party Vote Data  Not Found !...");
        };
        await VoteService.DeleteVote(voteId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Vote  Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    CreateVote,
    VoteAllList,
    VoteId,
    DeleteVote
}