function SetCookieHelper(req, res) {
  const title = req.query.cookie;
  const value = req.query.val;
  res.cookie(title, value, { httpOnly: true, maxAge: 9000000 });
  res.send(title);
}
module.exports = SetCookieHelper;
