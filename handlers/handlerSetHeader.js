const setHeaderHelper=require('./helpers/SetHeader');
function SetHeader(req, res) {
  setHeaderHelper(req,res);
}
module.exports = SetHeader;
