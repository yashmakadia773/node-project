const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    trim: true,
  },
  moviePrice: {
    type: String,
    trim: true,
  },
  movieDate: {
    type: String,
    trim: true,
  },

});

const movie = mongoose.model("movieSchema", movieSchema);

module.exports = movie;
