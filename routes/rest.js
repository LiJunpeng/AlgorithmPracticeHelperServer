var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var algoProblemServices = require("../services/AlgoProblemServices");


router.post("/AlgoProblem", jsonParser, function (req, res) {
    //var problemName = req.body.problemName;
    var problem = req.body.AlgoProblem;
    AlgoProblemServices.addAlgoProblem(problem, function (data) {
        res.json(data);
    }) 
});

module.exports = router;

