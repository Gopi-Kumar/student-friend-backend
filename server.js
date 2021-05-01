const express = require('express');
const app = express();
const port = 3001;
const connectDB = require("./configs/db")
const student = require('./models/student')

//db connection
connectDB();

app.get('/:userName/:password', async (req,res) => {
    const user_name = req.params.userName;
    const password = req.params.password;
    const result = await student.findOne({userName : user_name, password : password }).exec();
    res.send(result);
})


app.post("/", (req, res) => {
    
})

app.listen(port ,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}) 