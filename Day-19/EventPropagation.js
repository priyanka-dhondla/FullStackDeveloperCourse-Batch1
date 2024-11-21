const parentDiv=document.getElementById("parent");
const childDiv=document.getElementById("child");

const body=document.querySelector("body");

function parentHandler(){
    // event.preventDefault();
    // event.stopPropagation();
    console.log("Parent got Clicked")
}

function childHandler(){
    console.log("Child got Clicked");
}

function bodyHandler(){
    console.log("Body Got Clicked")
}

//Event Bubbling : bottom to top

//By default it shoeld taken as False

parentDiv.addEventListener("click",parentHandler,false);
childDiv.addEventListener("click",childHandler,false);
body.addEventListener("click",bodyHandler,false);


//Event Capturing : Top to Bottom

// parentDiv.addEventListener("click",parentHandler,true);
// childDiv.addEventListener("click",childHandler,true);
// body.addEventListener("click",bodyHandler,true);