var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlgoProblemSchema = new Schema({
    sourcePlatform: String,
    platformNumber: String,
    problemName: String,
    problemDescription: String,
    level: String,
    problemTags: {type: String},
    companyTags: {type: String},
    solution: String,
    note: String
})

var algoProblemModel= mongoose.model("AlgoProblemModel", AlgoProblemModel);

module.exports = algoProblemModel;


