
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

const button = document.querySelector("#data-theme-toggle");

displayImgMode(currentThemeSetting)

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  document.querySelector("html").setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);


  currentThemeSetting = newTheme;

  displayImgMode(currentThemeSetting)
  

});

document.querySelector("#data-theme-toggle").addEventListener('click', function () {
    console.log(this);
  }, false);

function displayImgMode(userMode) {
    userMode==="light" 
    ? 
    document.getElementById("img-id-mode").setAttribute('src', "./Images/sun.png")
    :
    document.getElementById("img-id-mode").setAttribute('src', "./Images/moon.jpeg")
    
}

/*-------------------------*/
/*-------Items nav */
/*-------------------------*/
/* Item categories */
/*-------------------------*/
let categories = document.querySelector(".btn-dropdown")
let menuDropdown = document.querySelector(".item-categories")
let header = document.querySelector(".nav-container")




categories.addEventListener("click", () =>{
    menuDropdown.classList.toggle("show-menu")
})

categories.addEventListener("blur", () =>{
    menuDropdown.classList.remove("show-menu")
})

/*-----Fetching the data -----*/

// const categoriesObj = ["womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes"];

// fetch(`https://dummyjson.com/products?limit=0`)
//     .then(res => res.json())
//     .then(data => {
//         dataArry = data.products;
//         const filteredData = dataArry.filter(item => categoriesObj.includes(item.category));
//         console.log(filteredData)
//     })
//     .catch(error => console.error('Error fetching data:', error));




const inputSearch = document.querySelector(".input-search")
const buttonSearch = document.querySelector(".button-search")

let searchText

buttonSearch.addEventListener('click', (e)=>{   
    searchText =  document.querySelector(".input-search").value;
})


inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchText = inputSearch.value; 
        }
});
            
console.log(searchText)

function clearInput() {
    const inputSearch = document.querySelector(".input-search")
    inputSearch.value = "";
}


// function matchInputToProducts(input, products) {
//     console.log(products)
//     console.log(input)
//     const filteredData = products.filter(item => {
//         const lowerCaseCategory = item.category.toLowerCase();
//         const lowerCaseSearchInput = input.toLowerCase();

//         return lowerCaseCategory.includes(lowerCaseSearchInput);
//     })
// }


// let searchInput = getInputSearch()

// let resultSearch = matchInputToProducts(searchInput, products);

// const searchResultProducts = (array) => {
//     console.log(array)
//     if (array) {
//         console.log(array)
//         array?.forEach((result) => {
//             const resultProduct = document.createElement("div")
//             resultProduct.className = "result-product"
//             resultProduct.innerHTML = `
//             <img src = ""https://i.dummyjson.com/data/products/${result.id}">
//             <button class = "button-fav-search" id = "button-${result.id}">Add to Favorites </button>`
//             searchResultsContainer.appendChild(resultCard)
//         }) 
//     }else {
//         return null
//     }
// }

//searchResultProducts(resultSearch)
