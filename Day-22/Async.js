//Asynchronous

// console.log("Apple");

//Callback Function:

// setTimeout(()=>{
//     console.log("Orange")
// },2000)

// console.log("Watermelon");

// setTimeout(()=>{
//     console.log("PineApple")
// },8000);

// console.log("Musk Melon")

//Apple
//Watermelon
//Mush Melon
//Orange
//PineApple

//CallBack Hell

function fruit1(callback){
    setTimeout(()=>{
        console.log("Apple")

    },1000)
    
}

function fruit2(callback){
    setTimeout(()=>{
        console.log("Orange")

    },2000)
    
}

function fruit3(callback){
    setTimeout(()=>{
        console.log("Grapes")

    },3000)
    
}


function fruit4(){
    setTimeout(()=>{
        console.log("Banana")

    },4000)
    
}

fruit1(()=>{
    fruit2(()=>{
        fruit3(()=>{
            fruit4()

        })

    })

})

console.log("All fruits")

const myPromise= new Promise((resolve,reject)=>{
    let success=true;

    if(success){
        resolve("Operation Succeeded!")
    }else{
        reject("Operation Failed")
    }
})

//.then() - Handles the successful outcome
 //.catch() - Handles errors or rejections
  //.finally() - Executes code regardless of the outcome (success or failure)


  myPromise
  .then(result=>{
    console.log(result)
  })

  .catch(error=>{
    console.error(error)
  })

  .finally(()=>{
    console.log("Promise Settled")
  })


//Error Handling Methods in Js

//Try

//Catch

//finally


try{
    console.log("JavaScript");
        // console.log(x)
    // console.log(1/0);
}
catch{
    console.error("X value is not defined")
    // console.log("Zero is not divisible")
}
finally{
    console.log("This always Executes")
}

console.log("You have reached the end")

// Aync/Await

