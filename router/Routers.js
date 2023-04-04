const express = require("express")
const formController = require("../controller/formcontrolers")
const router = express.Router()

router.get("/tipos", formController.getTypes) //consultar tipos de cliente

module.exports = router