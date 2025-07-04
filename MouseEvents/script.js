document.addEventListener("DOMContentLoaded", ()=>
{
    const container =document.querySelector(".container");
    const box= document.querySelector(".box");

    const containerC =()=> {
        container.classList.toggle("containerChange");
        container.classList.add("rotate");
    }

    container.addEventListener("click", containerC);
    box.addEventListener("mouseover", ()=>{
        box.classList.toggle("boxChange");
        container.classList.toggle("rotate");
    })

})