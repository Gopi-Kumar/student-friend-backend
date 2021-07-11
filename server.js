const express = require('express');
const app = express();
const port = 3001;
const connectDB = require("./configs/db")
// const bodyParser = require("body-parser");
const Student = require("./models/student.js");

//db connection
connectDB();


//body parse configuration
app.use(express.urlencoded({extended : true}));

app.use(express.json());

//routes
app.post("/login/:username/:password", async (req,res)=>{
    let username = req.params.username,
    password = req.params.password;
    console.log(username, password)
    let data = await Student.findOne({username : username, password  :password});
    if(data){
        res.json(JSON.parse(data));
    }else{
        res.json({message : "user not found"})
    }
    
})

app.post("/upload", (req,res)=>{

})

app.post("/newuser/:username/:password", async (req,res)=>{
    let username = req.params.username,
    password = req.params.password;

    let result = await Student.findOne({username : username, password: password});
    if(!result){
        let student = new Student({
            username, 
            password
        })
        await student.save().then(data=>{
            res.json(data);
        }).catch(err => {
            res.json({message : err});
        })
    }else{
        res.json({message : "Username or Password already taken."});
    }

    


})

//listening
app.listen(port ,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}) 