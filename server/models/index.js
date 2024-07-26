require("../database");
const User = require("./Users");
const Todo = require("./Todos");

User.hasMany(Todo, { foreignKey: "userId", onDelete: "CASCADE" });
Todo.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Todo,
};