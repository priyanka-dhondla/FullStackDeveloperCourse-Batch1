var form =document.getElementById("myform");
console.log(form)

function handleform(){
    event.preventDefault();
    console.log("Hi");
    var nameElement=document.getElementById("name");
    console.log(nameElement.value);
}


form.addEventListener("submit",handleform)