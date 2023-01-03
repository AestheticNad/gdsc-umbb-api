const mongoose = require("mongoose");
// for members who paticipate in events ( if solo pariticpating only member email if group join leader email )
const Participants = new mongoose.Schema(
    {
    eventName:{
          type:String,
          required:true
        },
      leaderEmailKey: {
        type: String,
        required: true,
      },
      groupEmails:{
        type: Array, 
        default:[]
      }
    }
  );
  
  module.exports = mongoose.model("Participants", Participants);