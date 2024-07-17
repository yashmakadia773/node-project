const mongoose = require("mongoose");
// party list model schema defiend
const PartyListSchema = new mongoose.Schema(
    {
        party:{
             type:mongoose.Types.ObjectId,
             ref:"Party"
        },
        election:{
             type:mongoose.Types.ObjectId,
             ref:"Election",
        },
          is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const partylist   =  mongoose.model("Partylist" , PartyListSchema);
//module expoart
module.exports = partylist;
