function setHeaderHelper(req,res){
    const { header_name, header_value } = req.params;
    res.set({
        'Content-Type':'text/plain', 
        [header_name]:header_value
});
    res.send("setHeader");
}
module.exports=setHeaderHelper;