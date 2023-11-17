
const containerCards = document.querySelector(".container")


const nodosCards = (data, container) => {
  const nodos = data.reduce((acc, element) => {
      return acc + `
          <article class="card">
              <figure class="container-img">
                  <img src=${element.image} alt="Imagen de ${element.category}">
              </figure>
              <h3>
                  ${element.title}
              </h3>
              <h4>
                  $ ${element.price}
              </h4>
              <button class="addcart" id="add-${element.id}">
                  <i class="addcart fa-solid fa-cart-plus" id="add-${element.id}"></i>
              </button>
          </article>
      `
  }, "")

  container.innerHTML = nodos
}


const fetchProductsAp = (url, generarNodos , container) => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
      generarNodos(data, container)    
      productos = data    
      console.log(productos)
  })
  .catch(error => console.error('Error fetching data:', error));
}

fetchProductsAp("https://fakestoreapi.com/products", nodosCards, containerCards)


// document.querySelector("#item-woman").addEventListener("click", (event) => {
//   console.log("here");
//   event.preventDefault(); 

//   const filteredProducts = productos.filter((producto) =>
//     producto.category.toLowerCase().includes("women's")
//   );
//   nodosCards(filteredProducts, containerCards);
// });


// const inputSearch = document.querySelector(".input-search")
// const buttonSearch = document.querySelector(".button-search")

// let searchText

// buttonSearch.addEventListener('click', (e)=>{   
//     searchText =  document.querySelector(".input-search").value;
// })


// inputSearch.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         searchText = inputSearch.value; 
//         }
// });

// function clearInput() {
//     const inputSearch = document.querySelector(".input-search")
//     inputSearch.value = "";
// }

