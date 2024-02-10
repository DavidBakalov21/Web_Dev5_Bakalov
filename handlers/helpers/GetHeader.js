function GetHeaderHelper(req,res){
    const { header_name } = req.params;
    const headerValue = req.get(header_name) || "Header not set";
    res.send(`Cutom header and its value '${header_name}': ${headerValue}`);
}
module.exports=GetHeaderHelper;