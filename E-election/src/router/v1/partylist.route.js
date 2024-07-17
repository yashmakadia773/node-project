const { PartyListController } = require("../../controller");
const express = require("express");
const validate = require("../../middlewares/validate");
const { PartyListValidation } = require("../../validation");
const router = express.Router();

//create party
router.post(
  "/create",
  validate(PartyListValidation.Createpartylist),
  PartyListController.CreatePartyList
);

//party list
router.get("/list", PartyListController.PartyAllList);
//party id
router.get("/findId/:listId", PartyListController.PartyListId);

//delete party
router.delete("/delete/:listId", PartyListController.DeletePartyList);
module.exports = router;
