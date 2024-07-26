const Joi = require("joi");

const login = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const todo = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().required(),
  finished: Joi.boolean().required()
})

module.exports = {
  login,todo
};