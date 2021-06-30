const express = require("express")
const router = express.Router()

const controller = require("./employeeController")

router.get("/employees", controller.getEmployee)


module.exports = router;