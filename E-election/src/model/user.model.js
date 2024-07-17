const mongoose = require("mongoose");
// user model schema defiend
const UserSchema = new mongoose.Schema(
    {
          cardNo :{
             type : String,
             trim : true,
          },
          name :{
             type : String,
             trim : true,
          },
          fatherName :{
            type : String,
            trim : true,
         },
         sex :{
            type : String,
            trim : true,
            enum: ['male', 'female', 'non-binary'],
         },
         dob :{
            type : String,
            trim : true,
         },
         address :{
            type : String,
            trim : true,
         },
         assemblyNoandName :{
            type : String,
            trim : true,
         },
         partNoandName :{
            type : String,
            trim : true,
         },
         password :{
             type :String,
             trim :true,
         },
         role :{
             type :String,
             default :"User"
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
const User =    mongoose.model("User" , UserSchema);
//module expoart
module.exports = User;
