const { ElectionController } = require("../../controller");
const { ElectionValidation } = require("../../validation");
const validate = require("../../middlewares/validate")
const express = require("express");
const router = express.Router();

//user create
router.post("/create" ,
validate(ElectionValidation.CreateElection),
ElectionController.CreateElection
)

//user list
router.get("/list" ,
ElectionController.ElectionList
)
//user id
router.get("/findId/:electionId",
   ElectionController.ElectionId
);

//delete user
router.delete("/delete/:electionId",
ElectionController.DeleteElection
);

module.exports = router;