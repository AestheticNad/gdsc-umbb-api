const mongoose = require("mongoose")

const ResetToken = new mongoose.Schema({
    uid:{
        type:String,
        unique:true,
        required:true
    },
    key:{
        type:String,
        unique:true,
        required:true
    },
    expires:{
        type:Number,
   }
})


module.exports = mongoose.model("ResetToken",ResetToken)