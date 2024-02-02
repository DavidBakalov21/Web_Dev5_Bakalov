const Message = require("../models/Message").Message;
function postMessage(req, res, message, Userid) {
  const newMessage = new Message({
    message: message,
    Userid: Userid,
  });
  newMessage
    .save()
    .then(() => res.send("Message was added successfully"))
    .catch((err) => res.status(500).send("Error saving book: " + err.message));
}
module.exports = postMessage;
