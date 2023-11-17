let categories = document.querySelector(".btn-dropdown")
let menuDropdown = document.querySelector(".item-categories")
let header = document.querySelector(".nav-container")




categories.addEventListener("click", () =>{
    menuDropdown.classList.toggle("show-menu")
})

categories.addEventListener("blur", () =>{
    menuDropdown.classList.remove("show-menu")
})
