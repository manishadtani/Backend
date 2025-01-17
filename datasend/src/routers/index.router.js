const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index.controller")
router.get("/", indexController.indexcontroller)
router.get("/create", indexController.createController)

module.exports = router