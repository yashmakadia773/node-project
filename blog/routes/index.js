let express = require("express");
let router = express.Router();
let UserRoute = require("./user.route");
let BlogRoute = require("./blog.route");

router.use("/user", UserRoute);
router.use("/blog", BlogRoute);

module.exports = router;
