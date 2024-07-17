const mongoose = require("mongoose");
// user model schema defiend
const ElectionSchema = new mongoose.Schema(
  {
    election_name: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// model create
const election = mongoose.model("Election", ElectionSchema);
//module expoart
module.exports = election;
