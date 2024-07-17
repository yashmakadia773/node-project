const express = require("express");
const   userRouter = require("./user.route");
const   LoginRouter = require("./login.router");
const   ElectionRouter = require("./election.route");
const   PartyRouter = require("./party.route");
const   PartyListRouter = require("./partylist.route");
const   VoteRouter = require("./vote.router");
const   CountRouter = require("./count.route");
const   AdminRouter = require("./admin.route");
const router = express.Router();

router.use("/user" , userRouter);
router.use("/login" , LoginRouter);
router.use("/election" , ElectionRouter);
router.use("/party" , PartyRouter);
router.use("/partylist" , PartyListRouter);
router.use("/vote" , VoteRouter);
router.use("/total" , CountRouter);
router.use("/admin"  , AdminRouter);

module.exports  = router;