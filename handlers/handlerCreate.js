const create = require("./Creator");
function handlerCreate(req, res) {
  const { message, Userid } = req.body;
  create(req, res, message, Userid);
}
module.exports = handlerCreate;
