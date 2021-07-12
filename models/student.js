const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    username : {type : String},
    password : {type : String},
    todos : {type : Array},
    alarms : {type : Array},
    routine : {type : Array},
    webbooks : {type : Array},
    notes : {type: Array}

    
}, {timestamps : true});

module.exports = mongoose.model("student", studentSchema);