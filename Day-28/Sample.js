console.log("Hello Node.js");

function calc(a,b){
    s=a+b;
    console.log(s);
}
calc(10,20);

console.log("Vishal "+ "Venkat ");

//Build -in -Modules

//OS - Operating System

//PATH

//FS

//HTTP

//OS Module

// const os=require("os");
// console.log(os.type());
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus());

//PATH

const path=require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

//http

const http=require('http');

const myServer=http.createServer((request,response)=>{
    response.write("server Stared and send response to client");
    response.end()
});

myServer.listen(3000);
