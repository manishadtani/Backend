const express = require("express");
const router = express.Router();
const Controller = require("../controllers/global.controller")

router.get("/" , Controller.globalController);


module.exports = router;