const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"userSchema",
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"movieSchema"
  },

});

const ticket = mongoose.model("ticketSchema", ticketSchema);

module.exports = ticket;
