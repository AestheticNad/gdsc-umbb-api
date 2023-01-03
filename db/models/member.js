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
    },
    departement: {
      type: String,
      required: true,
      trim: true,
    },
    isLead: {
      type: Boolean,
      default: false,
    },
    isCoLead: {
      type: Boolean,
      default: false,
    },
    isHumanResourcesTeam: {
      type: Boolean,
      default: false,
    },
    isProjectManager: {
      type: Boolean,
      default: false,
    },
    isDepartementManager: {
      type: Boolean,
      default: false,
    },
    isSectionChief: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", Member);
