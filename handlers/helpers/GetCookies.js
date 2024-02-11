function GetCookie(req,res){
  const { title } = req.params;
  const myCookieValue = JSON.stringify(req.cookies[title]);
  if (!myCookieValue){
    res.send(`Value of myCookie: not found`);
  }else{
  res.send(`Value of myCookie: ${myCookieValue}`);
  }
}
module.exports=GetCookie;