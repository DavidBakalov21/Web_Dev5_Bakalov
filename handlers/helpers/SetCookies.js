function SetCookieHelper(req,res){
    const { title, value } = req.params;
    res.cookie(title, value, {httpOnly: true, maxAge:9000000});
    res.send(title);
}
module.exports = SetCookieHelper;