var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var algoProblemServices = require("../services/AlgoProblemServices");

router.get("/AlgoProblem/:name", function (req, res) {
    var name = req.params.name;
    algoProblemServices.getAlgoProblem(name, function (problem) {
        if (problem) {
            res.json(problem);
        } else {
            res.status(404).send("what????????");
        }
    });
});

router.post("/AlgoProblem", jsonParser, function (req, res) {
    var problem = req.body;
    algoProblemServices.addAlgoProblem(problem, function (data) {
        res.json(data.problemName);
    }) 
});

module.exports = router;

