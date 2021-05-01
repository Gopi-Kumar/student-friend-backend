const express = require('express');
const app = express();
const port = 3001;
const connectDB = require("./configs/db")
const student = require('./models/student')
const bodyParser = require("body-parser");


//db connection
connectDB();

//body parse configuration
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

//routes
app.get('/:userName/:password', async (req,res) => {
    const user_name = req.params.userName;
    const password = req.params.password;
    const result = await student.findOne({userName : user_name, password : password }).exec();
    if(result.length === 0){
        res.send("No user found");
    }else{
        res.send(result)
    }
})


app.post("/", async (req, res) => {
   let user_name = req.body.userName;
   let password = req.body.password;
   let todo = req.body.todo;
   let alarm = req.body.alarm;
   const result = await student.findOne({userName : user_name, password : password }).exec();
    if(result === null){
        res.send("no user found");
    }else{
        await student.updateOne({userName : user_name, password : password}, {todo : todo, alarm : alarm}).exec();
        res.setHeader('Access-Control-Allow-Origin' , '*')
        res.send("Student updated"); 
    }
    res.send(result);
  
   

})

//listening
app.listen(port ,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}) 