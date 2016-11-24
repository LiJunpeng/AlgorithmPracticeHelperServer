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
                problemTags: problem.problemTags,
                companyTags: problem.companyTag,
                solution: problem.solution,
                note: problem.note
            });
            new_problem.save();
            callback(new_problem);
            // generateShortUrl(function (shortUrl) {
            //     var url = new UrlModel({ shortUrl: shortUrl, longUrl: longUrl});
            //     url.save();
            //     redisClient.set(shortUrl, longUrl);
            //     redisClient.set(longUrl, shortUrl);
            //     callback(url);
            // });
        }
     });


    // UrlModel.find({}, function (err, urls) {
    //     callback(convertTo62(urls.length));
    // });
};

var getAlgoProblem = function (callback) {
    // UrlModel.find({}, function (err, urls) {
    //     callback(convertTo62(urls.length));
    // });
};

module.exports = {
    addAlgoProblem: addAlgoProblem,
    getAlgoProblem: getAlgoProblem
};
