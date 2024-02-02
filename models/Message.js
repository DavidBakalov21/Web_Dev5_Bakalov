const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const MessageSchema = new Schema({
  message: String,
  Userid: String,
  time: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = {
  MessageSchema,
  Message,
};
