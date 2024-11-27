//Local Scope

function myFunction(){
    let a=10;
    console.log(a)//10
}
myFunction();
// console.log(a);//error: a is not defined


//Global Scope

let b=20;

function globalFunc(){
    console.log(b); //20
}

globalFunc();
console.log(b); //20