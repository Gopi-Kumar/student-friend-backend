const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    username : {type : String},
    password : {type : String},
    todos : {type : Array},
    alarms : {type : String},
    routine : {type : String},
    webpage : {type : String},
    notes : {type: String}

    
}, {timestamps : true});

module.exports = mongoose.model("student", studentSchema);