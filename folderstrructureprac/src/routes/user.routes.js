const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user.controller")

router.get("/" , Controller.userController);

router.get("/profile", Controller.profileController);





module.exports = router;