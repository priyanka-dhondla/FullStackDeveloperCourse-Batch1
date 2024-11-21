//Spread Operator : (...)

//is used to expand or spread elements from on iterable into individual elements.


const arr=[1,2,3]
console.log(...arr)

//copied
const arr1=[5,6,7,8]
const copiedArr1=[...arr1]
console.log(copiedArr1)


//merge

const arr3=[1,2,3,4]
const arr4=[12,13,14,15]

const merge=[...arr3, ...arr4];
console.log(merge);


//Rest Opeartor : (...)

//The rest operator is used in function parameters to collect all remaining arguments into an array


function display(first,second,...restArguments){
    console.log(first);
    console.log(second);
    console.log(restArguments)

}
display(1,2,3,4,5,6,7,8,9)


//Destructing

//array declaration

const colors=["red","green","orange","yellow"];

const places=["Goa","Delhi","Kerala"]

//destructing

const [first,second,third,fouth]=colors;

console.log(first);
console.log(second);
console.log(third);
console.log(fouth);

const [a,b,c]=places;

console.log(a);
console.log(b);
console.log(c);