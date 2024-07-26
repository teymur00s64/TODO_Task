const express = require("express");
const { authController } = require("../controllers");

const router = express.Router();

router.post("/login", authController.singIn);

module.exports = router;