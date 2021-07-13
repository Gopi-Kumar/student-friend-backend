const express = require('express');
const cors = require('cors');
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
app.use(cors());
//routes
app.post("/login/:username/:password", async (req,res)=>{
    let username = req.params.username,
    password = req.params.password;
    await Student.findOne({username : username, password  :password}).then(data => {
        if(data){
            res.json(data);
        }else{
            res.json({message : "Wrong credential!"})
        }
    }).catch(err => {
        res.json({message : err});
    })
    
})


    
app.post("/upload/:username/:password/:webbooks/:todos/:alarms/:routine/:notes",  async (req,res)=> {
    let {username, password, webbooks, todos, alarms, routine, notes} = req.params;
    await findOne({username : username, password : password}).then(async (data) =>{
        await Student.updateOne({username : username, password : password},{
            todos,
            webbooks,
            alarms,
            routine,
            notes,
        }).then(data => {
            res.json({message : "Uploaded"})
        }).catch(err => {
            res.json({message : err});
        })
    }).catch(err => {
        res.json({message : "err"});
    })
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
        await student.save().then( data => {
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