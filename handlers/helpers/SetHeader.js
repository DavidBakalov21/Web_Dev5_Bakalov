function setHeaderHelper(req, res) {
  const header_name = req.query.header;
  const header_value = req.query.value;
  res.set({
    "Content-Type": "text/plain",
    [header_name]: header_value,
  });
  res.send("setHeader");
}
module.exports = setHeaderHelper;
