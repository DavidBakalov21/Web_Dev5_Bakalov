const message = require("../models/Message").Message;
async function handlerGET(req, res) {
  const values = await message.find();
  res.render("GET", { items: values });
}
module.exports = handlerGET;
