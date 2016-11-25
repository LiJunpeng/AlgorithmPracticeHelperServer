var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var algoProblemServices = require("../services/AlgoProblemServices");

router.get("/AlgoProblems", function (req, res) {
    algoProblemServices.getAlgoProblemList(function (problem) {
        if (problem.length > 0) {
            res.json(problem);
        } else {
            res.status(404).send("what????????");
        }
    });
});

router.get("/AlgoProblems/:name", function (req, res) {
    var name = req.params.name;
    algoProblemServices.getAlgoProblem(name, function (problem) {
        if (problem) {
            res.json(problem);
        } else {
            res.status(404).send("what????????");
        }
    });
});

router.post("/AlgoProblems", jsonParser, function (req, res) {
    var problem = req.body;
    algoProblemServices.addAlgoProblem(problem, function (data) {
        res.json(data.problemName);
    }) 
});

module.exports = router;

