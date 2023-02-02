const header = document.querySelector("header");
const div = document.querySelector("header div")

window.addEventListener("scroll", () => {
    if(window.scrollY >= 100){
        if(header.classList.contains("visible")){
            header.classList.remove("visible")
            header.style.height = "0rem"
            div.style.opacity = 0;
        }
    }else{
        if(! header.classList.contains("visible")){
            header.classList.add("visible")
            header.style.height = "4.625rem"
            div.style.opacity = 1;
        }
    }
})