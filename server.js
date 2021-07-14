const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const connectDB = require("./configs/db")
const bodyParser = require("body-parser");
const Student = require("./models/student.js");


//body parser configuration
app.use(express.json())
//db connection
connectDB();



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


    
app.post("/upload/",  async (req,res)=> {
    let data = req.body;
    let {username, password, webpage, todos, alarms, routine, notes} = data;
    await Student.findOne({username : username, password : password}).then(async (data) =>{
        console.log("Studnet founded while uploading")
        await Student.updateOne({username : username, password : password},{
            todos,
            webpage,
            alarms,
            routine,
            notes,
        }).then(data => {
            console.log("uploaded data ", data)
            res.json({message : "Uploaded"})
        }).catch(err => {
            res.json({message : err});
        })
    }).catch(err => {
        console.log("finding err")

        res.json({message : err});
    })

})

app.post("/newuser/:username/:password", async (req,res)=>{
    console.log("Account Creating.....");

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