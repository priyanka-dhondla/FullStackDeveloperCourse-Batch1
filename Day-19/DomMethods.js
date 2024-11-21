//5 methods

//getElementById

//getElementByClassName

//getElementByTagname

//QuerySelector

//QuerySelectorAll


//getElementById

let headingEle=document.getElementById("head1");
console.log(headingEle);

//getElementByClassName

let headingEle1=document.getElementsByClassName("head1");
console.log(headingEle1);

//getElementByTagname

let tagElement=document.getElementsByTagName("h1");
console.log(tagElement);

let paraElement = document.getElementsByTagName("p");
console.log(paraElement);

//QuerySelector

//Class Selector

let myClassElement=document.querySelector(".head1");
console.log(myClassElement);

//id Selector

let idElement=document.querySelector("#head1");
console.log(idElement);

//QuerySelectorAll

let classElemnstAll=document.querySelectorAll(".head1");
console.log(classElemnstAll);


//Modify Content

//1.textContent

//2.InnerHTML

headingEle.innerHTML="<strong>Welcome Vishal</strong>";
headingEle.style.color="green";
headingEle.style.fontSize="40px";
console.log(headingEle)

//1.textContent
headingEle1.textContent="Hello World";
console.log(headingEle1);

//2 ways to attach an event to an Element
//1.Directly add event to that html element
//2.Add eventlisners in js


let myIdEle=document.getElementById("myId");

// function changeText(){
//     console.log("Clicked");
//     console.log(event);
//     // console.log(event.target.value);
//     event.target.innerHTML="Frontend Developer";
// }

function handler2(){
    // myIdEle.innerHTML="Backend Developer"
    myIdEle.innerHTML="<button> click me</button>"
    myIdEle.style.color="violet"
}

myIdEle.addEventListener("click",handler2)







