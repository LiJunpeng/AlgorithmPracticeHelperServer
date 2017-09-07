var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var dbLink = require("./DBaccess");

mongoose.connect(dbLink.dbLink);

app.use('/public', express.static(__dirname + "/public"));

app.use('/', indexRouter);

app.use("/api/v1", restRouter);

//app.use("/:shortUrl", restRouter);

app.listen(3001);
