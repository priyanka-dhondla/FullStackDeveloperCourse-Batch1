const express=require("express");
const dotEnv=require("dotenv");
const mongoose=require("mongoose");

const app=express();

const port= 3200;

dotEnv.config();

//MONGODB Connection

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected successfully");
})
.catch((error)=>{
    console.log(`${error}`)

})

//GET Method

app.get('/hello',(req,res)=>{
    // res.send("hello received GET request")
    // res.sendFile(__dirname+'/index.html')
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello Page</title>
        </head>
        <body>
            <h1>Welcome to the Hello Page!</h1>
            <p>Here is an ordered list:</p>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </body>
        </html>
    `);
})

//PUT Method
app.put('/hello',(req,res)=>{
    res.send("hello received PUT request")
})

//POST Method
app.post('/hello',(req,res)=>{
    res.send("hello received POST request")
})

//DELETE Method
app.delete('/hello',(req,res)=>{
    res.send("hello received DELETE request")
})

//web server

app.listen(port,()=>{
   console.log(`Server started and runs successfully at ${port}`) ;
});

