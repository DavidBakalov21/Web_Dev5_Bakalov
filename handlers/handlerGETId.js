const message = require("../models/Message").Message;

async function handlerGETId(req, res) {
  const messageId = req.params.id;
  const values = await message.findOne({ Userid: messageId });
  res.render("GET", { items: [values] });
}

module.exports = handlerGETId;
