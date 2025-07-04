document.addEventListener("DOMContentLoaded", function(){

    const userInput = document.querySelector(".input-field");
    const output = document.querySelector(".output");

    function getKey(event){

        const keyPressedOut = document.querySelector(".keyPressed");
        const keyCodeOut = document.querySelector(".keyCode");
        const eventTypeOut = document.querySelector(".eventType");
        const charCodeOut = document.querySelector(".charCode");

        keyPressedOut.textContent= `Key Pressed: ${event.key}`;
        keyCodeOut.textContent= `Key Code: ${event.code}`;
        eventTypeOut.textContent= `Event Type: ${event.type}`;
        charCodeOut.textContent= `Char Code: ${event.key.charCodeAt(0)}`
        
        
    }
    

    userInput.addEventListener("keypress", getKey);
})