const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  issueId: {
    type: String,
    required: true
  },
  userId: { 
    type: String,
     required: true 
    },
  notification: 
  { type: String, 
    required: true }
});

module.exports = mongoose.model("Notification", notificationSchema);
