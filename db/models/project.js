const mongoose = require("mongoose");
// here the projects that members make tsma b email ta3 member wela group leader u can tell him in which events he was in or which projects he was in 
const Project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  leaderEmailKey: {
    type: String,
    required: true,
  },
  groupEmails: {
    type: Array,
    default: [],
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Project", Project);
