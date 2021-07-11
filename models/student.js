const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    username : {type : String},
    password : {type : String},
    todo : {type : Array},
    alarm : {type : Array},
    routine : {type : Array},
    webbook : {type : Array},
    notes : {type: Array}

    
}, {timestamps : true});

module.exports = mongoose.model("student", studentSchema);