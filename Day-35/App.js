

// console.log("Backend Technology");

const express=require("express");
const dotEnv=require("dotenv");
const mongoose=require("mongoose");


dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected Successfully")
})
.catch((error)=>{
    console.log(`${error}`)

})

const app=express();


const port=3000;

//web server

app.listen(port,()=>{
    console.log("Server starts and runs successfully");
});

