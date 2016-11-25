var AlgoProblemModel = require("../models/AlgoProblemModel");

var addAlgoProblem = function (problem, callback) {
    AlgoProblemModel.findOne({ problemName: problem.problemName }, function (err, data) {

        if (data) {
            // tell client data already exist
            console.log("already exist");
            callback(problem);
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

var getAlgoProblemList = function (callback) {   // return a list of problem names
    AlgoProblemModel.find({}, function (err, problems) {
        var name_list = "";
        for(var i = 0; i < problems.length; i++) {
            name_list = name_list + problems[i].problemName + "|";
        }
        callback(name_list);
    });
};

module.exports = {
    getAlgoProblemList: getAlgoProblemList,
    addAlgoProblem: addAlgoProblem,
    getAlgoProblem: getAlgoProblem
};
