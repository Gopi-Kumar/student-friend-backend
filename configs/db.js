const mongoose = require('mongoose');
require("dotenv").config();
function dbConnect() {

    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },{ useUnifiedTopology: true })
        console.log("Database connected");
    } catch (err) {
        console.log("Database not connected :",err);
    }

}

module.exports = dbConnect;