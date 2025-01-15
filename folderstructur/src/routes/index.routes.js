const express = require('express')
const router = express.Router()
const controller = require("../controllers/index.controller")


router.get("/", controller.indexController)
router.get("/about", controller.aboutController)

module.exports = router;