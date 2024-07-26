const { todoService } = require("../services");

const findAll = async (req, res) => {
  const { user } = req;

  const todos = await todoService.findUserTodos(user.id);
  res.json(todos);
};

const createTodo = async (req, res) => {
  try {
    const { user } = req;
    let params = { ...req.body, userId: user.id };

    let result = await todoService.createTodo(params);

    res.json({
      message: "Todo is created successfully",
      todo: result,
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { user } = req;
    let params = { ...req.body, todoId: req.params.id, userId: user.id };

    let result = await todoService.updateTodo(params);

    res.json({
      message: "Todo is updated successfully",
      todo: result,
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { user } = req;

    await todoService.deleteTodo({
      todoId: req.params.id,
      userId: user.id,
    });

    res.json({
      message: "Todo is deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

module.exports = {
  findAll,
  createTodo,
  deleteTodo,
  updateTodo,
};