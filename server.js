const express = require("express");
const app = express();
require('dotenv').config({path:"dotenv.env"});//for dotenv.env file
// require('dotenv').config();//for normal .env file

app.set((req,res,next)=>{
    console.log(" i am middle ware here if don't allow you, you never reach webpage, so be careful")
})
app.get("/",(req,res)=>{
    res.json({obj:"I am the response object"});
})
// const port = process.env.PORT;
const port = process.env.port;
app.listen(port,()=>{
    console.log(port);
})