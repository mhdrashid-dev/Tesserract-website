
let navbarButton = document.querySelector('.nav-button');
let navcloseButton = document.querySelectorAll('.close-button');
let navLinkSec = document.querySelector('.mobile-nav-links');


navbarButton.addEventListener("click",()=>{
    navLinkSec.classList.remove("hidden");    
})


for(let button of navcloseButton){
    button.addEventListener("click",()=>{
        navLinkSec.classList.add("hidden");
        
    })
}

