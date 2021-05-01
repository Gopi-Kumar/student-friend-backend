const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    userName : {type : String},
    password : {type : String},
    todo : {type : Array},
    alarm : {type : Array},
}, {timestamps : true});

module.exports = mongoose.model("student", studentSchema);