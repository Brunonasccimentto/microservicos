const express = require("express")
const formController = require("../controller/formcontrolers")
const router = express.Router()

router.get("/todos", formController.getClients) 

module.exports = router