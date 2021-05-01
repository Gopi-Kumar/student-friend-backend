const mongoose = require('mongoose');
function dbConnect() {

    try {
        mongoose.connect('mongodb+srv://gopi:xZR7OYREtQ8ZPxeU@cluster0.s5h8o.mongodb.net/gopi_db?retryWrites=true&w=majority', { useNewUrlParser: true },{ useUnifiedTopology: true })
        console.log("Database connected");
    } catch (err) {
        console.log("Database not connected :",err);
    }

}

module.exports = dbConnect;