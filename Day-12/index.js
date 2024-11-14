// var a=10;

//var - variable
//a - variable name
//10= value

// console.log(a);

// variables

// var, let, const 

//var = traditional variable

//let, const- new variables added in Es6

//ES6 - Ecma Script 6

//difference between var, let & const

//var

var a=10;

var a=20;

console.log(a)

//let

// we cant re-declare by using let

let b=100;

// let b=200; 

b=200; //we can re-assign values 

console.log(b)

//const

const c="hello"

// const c="world";  //syntax error

// c="world"; //Type Error


console.log(c);


//datatypes

// 1.primitive datatype : Number, String, Boolean, Null, Undefined

//strings

//template Literal

var name="Venkat";

let str="Krishna"

var city="Tamilnadu";

// console.log(name +"is from"+ city);

// console.log("Welcome to our class "+name);

console.log(`Hello ${str}, he is from ${city}`)

//2.Non-primitive datatypes : Array, Object, Function

console.log("-------------------------------------")

//Loops : loops are used to execute a piece of code again and again

//for loop

//while loop

//dowhile loop

//for -in loop

//for - of loop

//forEach loop


//Higher order functions: Filter, map, reduce

//for loop

let sum=0;

for(let i=0; i<=6; i++){
    sum=sum+i
    // console.log(sum)
}
console.log(`sum is ${sum}`);

//While loop

let i=0;

while(i<=5){
    console.log(`Value is ${i}`);
    i++;
}
console.log(`outside loop value  is ${i}`);


//do-while loop

let x=20;

do{
    console.log("Hello World");
    x++;
}while(x<=10);// 21<=10

// for-of loop: user for strings and arrays

let str1="Butterfly";

for(let i of str1){
    console.log(i);
};

let array=[12,32,"Venkat",false,23.9]

for (let j of array){
    console.log(j);
};

//for - in loop: used for Objects;

//Objects
 let student={
    name: "Rahul",
    section: "A",
    Marks: 890,
    city:"Delhi"
 }

 console.log(student);

 console.log(typeof student);

//  for(let k of student){
//     console.log(k)
//  }


 for ( let k in student){
    // console.log(k)
    console.log(student[k]);
    
 }

