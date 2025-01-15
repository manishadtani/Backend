const express = require("express");
const router = express.Router();
const Controller = require("../controllers/index.controller")

router.get("/" , Controller.homeController);

router.get("/about", Controller.aboutController);





module.exports = router;