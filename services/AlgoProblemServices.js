var AlgoProblemModel = require("../models/AlgoProblemModel");

var addAlgoProblem = function (problem, callback) {
    AlgoProblemModel.findOne({ problemName: problem.problemName }, function (err, data) {

        if (data) {
            // tell client data already exist
        } else {
            var new_problem = new AlgoProblemModel({ 
                sourcePlatform: problem.sourcePlatform,
                platformNumber: problem.platformNumber,
                problemName: problem.problemName,
                problemDescription: problem.problemDescription,
                level: problem.level,
                // problemTags: problem.problemTags,
                // companyTags: problem.companyTag,
                solution: problem.solution,
                note: problem.note
            });
            new_problem.save();
            callback(problem);
        }
    });
};

var getAlgoProblem = function (name, callback) {
    AlgoProblemModel.findOne({problemName: name}, function (err, data) {
        callback(data);
    });
};

module.exports = {
    addAlgoProblem: addAlgoProblem,
    getAlgoProblem: getAlgoProblem
};
