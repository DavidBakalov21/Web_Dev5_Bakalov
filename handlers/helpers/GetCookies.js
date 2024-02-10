function GetCookie(req,res){
  const { title } = req.params;
  const myCookieValue = JSON.stringify(req.cookies[title]);
  res.send(`Value of myCookie: ${myCookieValue}`);
}
module.exports=GetCookie;