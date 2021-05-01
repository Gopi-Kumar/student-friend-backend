const express = require('express');
const app = express();
const port = 3001;
const connectDB = require("./configs/db")


//db connection
connectDB();


app.get('/', (req,res) => {
    res.send("Hello world")
})

app.listen(port ,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}) 