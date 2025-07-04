document.addEventListener("DOMContentLoaded", function(){

    const userInput = document.querySelector(".input-field");
    const output = document.querySelector(".output");

    function getKey(event){

        const inputValue = document.querySelector(".inputValue").textContent= `Input Value:- ${event.data}`;
        const inputName = document.querySelector(".inputName").textContent= `Input Name:- ${event.target.name}`;
        const inputType = document.querySelector(".inputType").textContent= `Input Type:- ${event.inputType}`;
        const eventType = document.querySelector(".eventType").textContent= `Event Type:- ${event.type}`;
        console.log(event);
        
        
    }
    

    userInput.addEventListener("input", getKey);
    })