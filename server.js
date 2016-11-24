var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");

mongoose.connect("mongodb://ljp:67890@ds149207.mlab.com:49207/algo_problem_db");

app.use('/public', express.static(__dirname + "/public"));

app.use('/', indexRouter);

app.use("/api/v1", restRouter);

//app.use("/:shortUrl", restRouter);

app.listen(3001);
