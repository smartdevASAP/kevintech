const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController.js");

router.get("/", controllers.getReq);

module.exports = router;
// git remote add origin https://github.com/smartdevASAP/kelvinTech.git
