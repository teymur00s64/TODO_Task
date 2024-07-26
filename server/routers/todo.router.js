const express = require("express");
const { todoController } = require("../controllers");
const { validationMiddlewareTodo } = require("../middlewares/validation.middleware");
const { authSchema } = require("../schemas");

const router = express.Router();

router.get("/", todoController.findAll);
router.post("/", validationMiddlewareTodo(authSchema.todo), todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;