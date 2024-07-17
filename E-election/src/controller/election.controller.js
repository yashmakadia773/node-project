const { ElectionService} = require("../service");

const CreateElection = async (req, res) => {
    try {
        const reqBody = req.body;
        const Election = await ElectionService.Findname(reqBody.election_name);
        if (Election) {
            throw new Error("Election Name Already This nameCreated  => " +Election.election_name);
        }
            let  data = await ElectionService.CreateElection(reqBody);
            if (!data) {
                throw new Error(" Election Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Election Data Created ..!",
                data: data
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// List
const ElectionList = async (req, res) => {
    try {
        const List = await ElectionService.ElectionList(req, res);
        res.status(200).json({
            success: true,
            message: "Election  List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// Id find
const ElectionId = async (req, res) => {
    try {
        const electionId = req.params.electionId;
        const ID = await ElectionService.ElectionId(electionId);
        if (!ID) {
            throw new Error("ELection Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully  Election Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};


//Election  delete
const DeleteElection = async (req, res) => {
    try {
        const electionId = req.params.electionId;
        const ID = await ElectionService.ElectionId(electionId);
        if (!ID) {
            throw new Error("ELection Data  Not Found !...");
        };
        await ElectionService.DeleteElection(electionId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Election Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports ={
       CreateElection,
       ElectionList,
       ElectionId,
       DeleteElection,
}