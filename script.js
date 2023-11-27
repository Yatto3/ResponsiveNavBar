'use strict';

const menuButton = document.querySelector("[data-menu]");
const infoContainerElem = document.querySelector("[data-info]");

let isOpen = false

function animateMenu(){
    
    let [elemOne, elemTwo, elemThree] = menuButton.querySelectorAll("span");

   if (!isOpen){
    menuButton.style.marginTop = "40px";
    elemOne.style.animation = "down-rotate 0.6s ease-out both";
    elemOne.style.width = '6vw';
    elemTwo.style.animation = "up-rotate 0.6s ease-out both";
    elemTwo.style.width = '6vw';
    elemThree.style.animation = "hide 0.2s ease-out forwards";
    return;
   }
    menuButton.style.marginTop = "20px";
    elemOne.style.animation = "rotate-back 0.6s ease-in both";
    elemOne.style.width = '2vw';
    elemTwo.style.animation = "rotate-back 0.6s ease-in both";
    elemTwo.style.width = '2vw';
    elemThree.style.animation = "unhidden 0.2s ease-in forwards";
    return;
    
}

menuButton.addEventListener("click" ,() =>{
   if ( !isOpen){
    animateMenu();
    isOpen = true;
    infoContainerElem.classList.remove("hidden");
    infoContainerElem.classList.toggle("unhidden");
    return;
   }
   animateMenu();
   isOpen = false;
   infoContainerElem.classList.remove("unhidden");
   infoContainerElem.classList.toggle("hidden");

})