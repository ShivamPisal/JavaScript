document.addEventListener("DOMContentLoaded", function(){

    const userInput = document.querySelector(".input-field");
    const userBtn = document.querySelector(".input-btn");
    const output = document.querySelector(".output");

    function addingTask(task){
        const p =document.createElement("p");
        p.textContent=task;
        output.append(p);
        userInput.value="";
    }

    function gettingInput(){
        const task = userInput.value;
        addingTask(task);
    }
    userBtn.addEventListener("click", gettingInput);
    output.addEventListener("click", (event)=>{
        if(event.target.tagName==="P"){
            event.target.remove();
        }
     
    })
})