const { PartyController } = require("../../controller");
const express = require("express");
const {upload} = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { PartyValidation} = require("../../validation");
const router = express.Router();

//create party
router.post("/create_party",
upload.single("party_logo"),
validate(PartyValidation.CreateParty),
PartyController.CreateParty
);

//party list
router.get("/list" ,
PartyController.PartyList
)
//user id
router.get("/findId/:partyId",
  PartyController.PartyId
);

//delete user
router.delete("/delete/:partyId",
PartyController.DeleteParty
);
module.exports =router;