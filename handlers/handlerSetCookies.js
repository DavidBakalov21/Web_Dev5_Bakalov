const setCookieHelper=require('./helpers/SetCookies');
function SetCookie(req, res) {
  setCookieHelper(req, res)
}
module.exports = SetCookie;
