const mongoose = require("mongoose");
//for members data in db and auth , signup purposes
const Member = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    hashedPassword: {
      type: String,
      required: true,
      trim: true,
    },
    discordTag: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    departement: {
      type: String,
      required: true,
      enum:["Design","Development","Design","Multimedia","Marketing & Logistics"]
    },
   role:{
    type:String,
    required:true,
    default:"member",
    enum:["member","lead","coLead","humanResources","projectManager","departementManager","sectionChief"]
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", Member);
