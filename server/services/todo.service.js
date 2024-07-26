const { Todo } = require("../models");

const findUserTodos = async (userId) => {
  const todos = await Todo.findAll({ where: { userId } });
  return todos;
};

const findUserTodo = async (todoId, userId) => {
  const todo = await Todo.findOne({ where: { id: todoId, userId: userId } });
  return todo;
};

const createTodo = async (params) => {
  const { title, description, finished, userId } = params || {};
  let todo = await Todo.create({ title, description, finished, userId });

  return todo;
};

const updateTodo = async (params) => {
  const { title, description, finished, todoId, userId } = params || {};

  let todo = await findUserTodo(todoId, userId);
  if (!todo) throw new Error("Todo is not found");

  let updatedTodo = await Todo.update(
    { title, description, finished },
    { where: { id: todo.id } }
  );

  return updatedTodo;
};

const deleteTodo = async (params) => {
  const { todoId, userId } = params || {};

  let todo = await findUserTodo(todoId, userId);

  if (!todo) throw new Error("Todo is not found");

  await Todo.destroy({ where: { id: todo.id } });
  return true;
};

module.exports = {
  findUserTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};