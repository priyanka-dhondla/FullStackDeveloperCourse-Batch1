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

// parentDiv.addEventListener("click",parentHandler);
// childDiv.addEventListener("click",childHandler);
// body.addEventListener("click",bodyHandler);


//Event Capturing : Top to Bottom

parentDiv.addEventListener("click",parentHandler,true);
childDiv.addEventListener("click",childHandler,true);
body.addEventListener("click",bodyHandler,true);