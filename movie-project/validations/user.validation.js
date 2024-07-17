const Joi = require("joi");

const adduser = {
  body: Joi.object().keys({
    userName: Joi.string().required().trim(),
    mobileNumber: Joi.string().required().trim(),
    userId: Joi.string().required().trim(),
  }),
};

module.exports = {
  adduser,
};
