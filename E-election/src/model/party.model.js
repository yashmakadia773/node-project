const mongoose = require("mongoose");
const config = require("../config/config")
// party model schema defiend
const PartySchema = new mongoose.Schema(
    {
        party_name:{
              type:String,
              trim:true,
        },
          party_logo:{
              type :String,
              trim:true,
        },
        short_code:{
              type :String,
              trim:true,
        },
          is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.party_logo) {
                data.party_logo = `${config.base_url}party-images/${data.party_logo}`;
              }
            },
          },
        }
      );
// model create
const Party =    mongoose.model("Party" , PartySchema);
//module expoart
module.exports = Party;
