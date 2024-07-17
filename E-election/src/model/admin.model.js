const mongoose = require("mongoose");
// user model schema defiend
const AdminSchema = new mongoose.Schema(
    {
          name :{
             type : String,
             trim : true,
          },
         password :{
             type :String,
             trim :true,
         },
         role :{
             type :String,
             default :"Admin"
         },
         token :{
             type :String
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
const Admin =    mongoose.model("Admin" , AdminSchema);
//module expoart
module.exports = Admin;
