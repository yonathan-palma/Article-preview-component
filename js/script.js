"use strict";

let shere = document.getElementById("shere");
let shereIcon = document.getElementById("shere_icon");
let tooltip = document.querySelector(".tooltip");

shere.addEventListener("click", ()=>{
    shere.classList.toggle("black");
    if (shere.classList.contains("black")) {  
        shereIcon.setAttribute('src', 'images/icon-shareWhite.svg');
        tooltip.style.visibility ="inherit";
    }else{
        shereIcon.setAttribute('src', 'images/icon-share.svg');
        tooltip.style.visibility ="hidden";
    }

})