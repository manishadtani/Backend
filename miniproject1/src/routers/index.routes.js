const express = require("express");
const  indexController = require("../controllers/index.controller");
const router = express.Router()



router.get("/", indexController.indexController)

router.post("/register", indexController.registerController)

module.exports = router;