const express = require("express");
const handlerNotFound = require("./handlers/handlerNotFound");
const handlerGET = require("./handlers/handlerGET");
const handlerGETId = require("./handlers/handlerGETId");
const handlerNEW = require("./handlers/handlerNEW");
const handlerCreate = require("./handlers/handlerCreate");
const mongoose = require("./mongooseConnect");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 1000;
app.set("view engine", "pug");
app.set("views", "views");

mongoose.set("strictQuery", false);

app.listen(port, () => {
  //console.log("works!");
});
app.get("/GET", handlerGET);
app.get("/new", handlerNEW);
app.post("/create", handlerCreate);
app.get("/GET/:id", handlerGETId);
app.get("/*", handlerNotFound);
