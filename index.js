const express = require("express");
const cookieParser = require("cookie-parser");
const handlerNotFound = require("./handlers/handlerNotFound");
const handlerGET = require("./handlers/handlerGET");
const handlerGETId = require("./handlers/handlerGETId");
const handlerNEW = require("./handlers/handlerNEW");
const handlerCreate = require("./handlers/handlerCreate");
const mongoose = require("./mongooseConnect");
const bodyParser = require("body-parser");
const handlerSetCookies=require("./handlers/handlerSetCookies");
const handlerGetCookies = require("./handlers/handlerGetCookies");
const handlerSetHeader = require("./handlers/handlerSetHeader");
const handlerGetHeader = require("./handlers/handlerGetHeader");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 1000;
app.set("view engine", "pug");
app.set("views", "views");
app.use(cookieParser());
mongoose.set("strictQuery", false);

app.listen(port, () => {
  //console.log("works!");
});
app.get("/GET", handlerGET);
app.get("/new", handlerNEW);
app.post("/create", handlerCreate);
app.get("/GET/:id", handlerGETId);

//hw7
app.get('/set_cookie/:title/:value', handlerSetCookies);
app.get('/get_cookie/:title/', handlerGetCookies);
app.get('/set_header/:header_name/:header_value', handlerSetHeader);
app.get('/get_header/:header_name/', handlerGetHeader);
app.get("/*", handlerNotFound);


