const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
// const { connect } = require("http2");
// const { error } = require("console");

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://yasvisenjaliya2:Y@1925@cluster0.ldcah5b.mongodb.net/MY-APP")

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})