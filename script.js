const ham = document.querySelector(".burger"); 
const Menu = document.querySelector(".nav-menu"); 

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    Menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link");
addEventListener("click", () => {
    ham.classList.remove("active");
    Menu.classList.remove("active");
})
