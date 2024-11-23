//Synchronous JavaScript

console.log("first");
console.log("Second");
console.log("Third");
console.log("Fourth");
console.log("Fifth");

//Asynchronous JavaScript


// setTimeout(()=>{
//     console.log("first code");
// },4000);

console.log("Second code");


//Callback function : Callback is function that takes an argument of another function

// setTimeout(()=>{
//     console.log("Third code");

// },3000)


// setTimeout(()=>{
//     console.log("Sixth Code")
// },2000);

// console.log("Third code");

console.log("Fourth code");
console.log("Fifth code");

//CallBack hell

function task1(callback){
    setTimeout(()=>{

        console.log("Task 1 Complete")
    },2000);
    
}

function task2(callback){
    setTimeout(()=>{

        console.log("Task 2 Complete")
    },1000);
}

function task3(callback){
    setTimeout(()=>{

        console.log("Task 3 Complete")
    },3000);
}

function task4(callback){
    setTimeout(()=>{

        console.log("Task 4 Complete")
    },1500);
}

// task1()
// task2()
// task3()
// task4()
// console.log("All Tasks Completed")

//CallBack Hell

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All Tasks Completed");
//             })
//         })
//     })
// })

//Promises

//resolve

//reject

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