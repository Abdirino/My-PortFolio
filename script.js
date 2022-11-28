// on-scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))
// end on-scroll animation

// popup menu
let popup = document.getElementById("popup");
function openPopup () {
    popup.classList.add("open-popup");
}
function closePopup () {
    popup.classList.remove("open-popup");
}

