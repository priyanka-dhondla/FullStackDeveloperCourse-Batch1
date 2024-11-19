//4 types of iterations over an array

//forEach : It doesn't return a new array

//filter

//Map : It always returns a new array

//reduce

var num=[1,2,3,4,5]

//forEach

num.forEach(function(element,index,array){
    console.log(`${element} <==> ${index} <==>${array}`)
})

//filter

//Get even numbers from array num and store in new array

//method1

var evenNum=[];

for(var ele of num){
    if(ele%2==0){
        evenNum.push(ele)
    }
}

console.log(num); //1,2,3,4,5
console.log(evenNum) //2,4

//Method2

var evenNum=num.filter((ele)=>{
    return ele%2==0;

})

console.log(num); //1,2,3,4,5
console.log(evenNum) //2,4

//Map

var num=[1,2,3,4,5]

// Add 2 in each element of num array and store the new values in a new array


// Method1:

var newArray=[]

for (var ele of num){
    ele=ele+2
    newArray.push(ele)
}
console.log(num);//[1,2,3,4,5]
console.log(newArray) //[3,4,5,6,7]

//Method2

var newarray=num.map((ele,index,array)=>{
    console.log(ele);
    ele=ele+2;
    return ele;

})

console.log(num);
console.log(newarray)


//Reduce

var num=[1,2,3,4,5]

console.log(num)

var singleVal =num.reduce((acc,ele,index,array)=>{
    console.log(`acc: ${acc} <==> ele :${ele} <==> index: ${index} <==> array: ${array}`);
    return acc*ele

})

console.log(singleVal)


//Objects

var it1={
    name:"Shoes",
    category:"footwear",
    price:800
}

console.log(it1);

console.log(it1["price"])

console.log(it1.price);

//keys: will get all keys in object

for (var key in it1){
    console.log(key)
    // console.log(it1.key);
    console.log(it1[key])
}

var it1={
    name:"Shoes",
    category:"footwear",
    price:800
}

const keys=Object.keys(it1);
console.log(keys)

const values=Object.values(it1);
console.log(values)

const entries=Object.entries(it1);
console.log(entries)