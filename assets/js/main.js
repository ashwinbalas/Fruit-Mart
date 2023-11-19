const navbar = document.querySelector(".header .primary-nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("open-nav");
    menuBtn.classList.toggle("fa-x");
});

window.addEventListener("load",  ()=>{
    navbar.classList.remove("open-nav");
    menuBtn.classList.remove("fa-x");
});  
window.addEventListener("scroll",  ()=>{
    navbar.classList.remove("open-nav");
    menuBtn.classList.remove("fa-x");
});




