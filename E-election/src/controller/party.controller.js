const { PartyService } = require("../service");

//create party
const CreateParty = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.party_logo = req.file.filename
        } else {
            throw new Error("Party Logo Is Required....!");
        }
        const PartyEx = await PartyService.FindName(reqBody.party_name);
        if (PartyEx) {
            throw new Error("party Name Already This name  Created => " + PartyEx.party_name);
        }
        let party = await PartyService.CreateParty(reqBody);
        if (!party) {
            throw new Error(" party Not Created , Please Try  Again Later");
        };

        res.status(200).json({
            success: true,
            message: " SuccessFully Party Data  Created ..!",
            data: party
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// List
const PartyList = async (req, res) => {
    try {
        const List = await PartyService.PartyList(req, res);
        res.status(200).json({
            success: true,
            message: "Party List SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// Id find
const PartyId = async (req, res) => {
    try {
        const partyId = req.params.partyId;
        const ID = await PartyService.partyId(partyId);
        if (!ID) {
            throw new Error("Party Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Party Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};


//party delete
const DeleteParty = async (req, res) => {
    try {
        const partyId = req.params.partyId;
        const ID = await PartyService.partyId(partyId);
        if (!ID) {
            throw new Error("Party Data Not Found !...");
        };
        await PartyService.DeleteParty(partyId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Party Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    CreateParty,
    PartyList,
    PartyId,
    DeleteParty
}