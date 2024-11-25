// var a=10;

// console.log(a);


//var -function scoped

//let,const are block scoped variables

// block scoped Variable

function test(){
    var a=20;
    if(true){
        let b=30;
        const y=true
        var z="Vishal"
        console.log(`Welcome ${z}`)
        console.log(`the value of b is ${b}`)
        console.log(`Value is ${y}`)
    }
    // console.log(`Value is ${y}`)
    console.log(`Welcome ${z}`)
    // console.log(`the value of b is ${b}`)
}
test()

//Functions

function sum(x,y){
    s=x+y
    return s
}

let b=sum(10,20)
console.log(`Sum of values are ${b}`)


//function declaration
function demo(){
    let i=0
    while(i<=4){
        
        console.log("Hello World");
        i++;
       
    }
   
}
demo()

//Arrow function
var arrowFunc=(a,b)=>a*b;

// var arrowFunc2=(a,b)=>{
//     var sum=a+b;
//     return sum;
// }

// console.log(arrowFunc2(3,4));
console.log(arrowFunc(30,20));

//== ---> loosly equal to
//=== ---> strictly equal to 

// console.log(2+2);//4

// console.log(2+"2");//22

// console.log("Hello"+2) //Hello2

// console.log(100+100) //200

// console.log(100+"100") //100100

// console.log("234"+12) //23412

// console.log(2==2)//true

// console.log(2=="2") //true

// console.log(2===2)//true

// console.log(2==="2") //False

// console.log(3==4) //False

// console.log(100==10)//False

// console.log(12==12)  //True

// console.log("12"===12)//False

// console.log(true==false)//false

// console.log(true==true)//true

// console.log(false==true)//false

// console.log(true===true)//true

// console.log(false===true)//false

// console.log(1==0)//false

console.log(2+2) //4

console.log(2+"2")//22

console.log("100"+2)//1002

console.log(2+"hello")//2hello

console.log(2==2);//true

console.log(2=="2")//true

console.log(2==="2");//false

console.log("hello"=="hello")//true

console.log("hello"=="Hello")//false

console.log("120"=="102")//false

console.log(true==false)//false

console.log(true=="1")//false