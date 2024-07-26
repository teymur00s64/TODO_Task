const express = require("express");
const { userController } = require("../controllers");
const { validationMiddlewareUser } = require("../middlewares/validation.middleware");
const { authSchema } = require("../schemas");

const router = express.Router();

router.get("/", userController.findAll);
router.post("/", validationMiddlewareUser(authSchema.login), userController.createUser);

module.exports = router;