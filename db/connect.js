const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
require("dotenv").config()

const connectDB=()=>mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connectDB;