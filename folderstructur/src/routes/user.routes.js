const express = require("express")
const router = express.Router();
const userController = require("../controllers/user.controller")



router.get("/", userController.userController)
router.get("/profile", userController.profileController)



module.exports = router