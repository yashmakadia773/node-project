const { PartyListService } = require("../service");

//create party
const CreatePartyList = async (req, res) => {
  try {
    const reqBody = req.body;
    let party = await PartyListService.CreatePartyList(reqBody);
    if (!party) {
      throw new Error(" party List Not Created , Please Try  Again Later");
    }
    res.status(200).json({
      success: true,
      message: " SuccessFully Party List Data  Created ..!",
      data: party,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// List
const PartyAllList = async (req, res) => {
  try {
    const List = await PartyListService.PartyAllList(req, res);
    res.status(200).json({
      success: true,
      message: "Party List SuccessFully Display Get !.....",
      data: List,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Id find
const PartyListId = async (req, res) => {
  try {
    const listId = req.params.listId;
    const ID = await PartyListService.PartyListId(listId);
    if (!ID) {
      throw new Error("Party List Data  Not Found !...");
    }
    res.status(200).json({
      success: true,
      message: "Suucessfully Party List Data Get!....",
      data: ID,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//party delete
const DeletePartyList = async (req, res) => {
  try {
    const listId = req.params.listId;
    const ID = await PartyListService.PartyListId(listId);
    if (!ID) {
      throw new Error("Party List Data  Not Found !...");
    }
    await PartyListService.DeletePartyList(listId);
    res.status(200).json({
      success: true,
      message: "Suucessfully Party List Data Deleted!....",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  CreatePartyList,
  PartyAllList,
  PartyListId,
  DeletePartyList,
};
