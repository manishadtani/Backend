const express = require("express");
const { indexController, registerController, getAllusers, getupdateusers, DeleteUsers }   = require("../controllers/index.controllers");
const router = express.Router()



router.get("/", indexController)

router.get("/register", registerController)

router.get("/users", getAllusers)

router.get("/updateusers", getupdateusers)

router.get("/deleteuser", DeleteUsers)



module.exports = router;