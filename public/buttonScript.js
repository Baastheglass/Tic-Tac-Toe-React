var button = document.querySelector("#btn");
function mouseFunction()
{
    button.classList.add("nohover");
    setTimeout(()=>{button.classList.remove("nohover")}, 1500);
}

    
