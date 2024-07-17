const { VoteController } = require("../../controller");
const validate = require("../../middlewares/validate");
const {VoteValidation} =require("../../validation");
const express = require("express");
const router = express.Router();

//create vote
router.post("/create",
validate(VoteValidation.Createvote),
VoteController.CreateVote
);

//vote list
router.get("/list" ,
VoteController.VoteAllList
)
//vote id
router.get("/findId/:voteId",
VoteController.VoteId
);

//delete vote
router.delete("/delete/:voteId",
VoteController.DeleteVote
);
module.exports =router;