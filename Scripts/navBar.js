let menuDropdown = document.querySelector(".item-categories")
let MyHeader = document.querySelector(".myHeader")
const itemHome = document.querySelector("#item-home")


/* stick header*/
window.onscroll = function() {
    myFunction()
};
let sticky = MyHeader.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    MyHeader.classList.add("sticky");
  } else {
    MyHeader.classList.remove("sticky");
  }
}


categories.addEventListener("click", () =>{
    menuDropdown.classList.toggle("show-menu")
})

itemHome.addEventListener("click", () => {
    sectionProducts.style.display = 'flex'
    fetchProductsApp("https://fakestoreapi.com/products", nodosCards, containerCards)
  })
