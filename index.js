const PORT = 5000
const express = require('express');
const app = express()
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

app.use('/login',loginRouter)


//PORT  listening
app.listen(PORT, () => {
    console.log(`app listen in ${PORT}`);
});

//creating Schema
const verifySchema= new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        },

    },
    {
        collection:"VerifyUser"
    }
);


//connceting db
const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MongoDb_Url);
        console.log("connected to mongo db");
    }catch(error){
        console.log(error);
    }
};
connectDb()