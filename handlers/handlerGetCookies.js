const GetCookieHelper=require('./helpers/GetCookies');
function GetCookie(req, res) {
  GetCookieHelper(req, res);
}
module.exports = GetCookie;
