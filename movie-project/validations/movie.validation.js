const Joi = require("joi");

const addmovie = {
  body: Joi.object().keys({
    movieName: Joi.string().required().trim(),
    moviePrice: Joi.string().required().trim(),
    movieDate: Joi.string().required().trim(),
  }),
};

module.exports = {
  addmovie,
};

