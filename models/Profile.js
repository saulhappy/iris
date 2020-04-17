const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  about: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
  },
  openForRequests: {
    type: Boolean,
    default: false,
  },
  helpWith: {
    type: [String],
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
