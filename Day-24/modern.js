//Aync/Await

//Example 1: 

const fetchData= async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data=await response.json();
        console.log(data)
    }
    catch(error){
        console.error("Error fetching data:",error)
    }
};

fetchData();

//Example 2

function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("Resolved")
            
        },2000);
    })
}

async function ayncCall(){
    console.log("Calling");
    const result= await resolveAfter2Seconds();
    console.log("result: ",result)
}

ayncCall();


//closure:

// var a=10;

function f1(){
    var a=10;

    function f2(){
        var b=20;
        console.log(a);
        console.log(b);
    }


    f2();
}

f1();

//Hoisting

//1.Functional Hoisting

//2.Variable Hoisting

console.log(a)
// const a=70;
var a=70;
// a=20;
console.log(a)

//functional Hoisting

myfunction()

function myfunction(){
    console.log("Helo World");
}
