const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  finished: {
    type: DataTypes.BOOLEAN,
  }
});

module.exports = Todo;