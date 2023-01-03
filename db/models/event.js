const mongoose = require("mongoose");
//for events quick informations (descriptions and winners not required )
const Event = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    managers: {
      type: Array,
      required: true,
    },
    activities: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
    },
    eventWinners: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", Event);
