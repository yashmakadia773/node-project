const mongoose = require("mongoose");
// vote model schema defiend
const VoteSchema = new mongoose.Schema(
    {
        user:{
             type:mongoose.Types.ObjectId,
             ref:"User"
        },
            party:{
                type:mongoose.Types.ObjectId,
                ref:"Party"
           },
           election :{
            type: mongoose.Types.ObjectId,
            ref : "Election",
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
const vote   =  mongoose.model("vote" , VoteSchema);
//module expoart
module.exports = vote;
