const express=require("express");
const app= express();
const port=4000;

//web server

app.listen(port,()=>{
    console.log("Server starts and runs successfully");
})

//middleware

app.get("/apple",(req,res)=>{
    res.write("Backend Technology")

})
