/* Variables */
const containerCards = document.querySelector(".container-products")

/* Functions--- */

const nodosCards = (data, container) => {
  const nodos = data.reduce((acc, element) => {
    const shortTitle = element.title.split(" ").splice(0,3).join(" ")

      return acc + `
          <article class="card">
              <figure class="container-img">
                  <img src=${element.image} alt="Imagen de ${element.category}">
              </figure>
              <h3 class="products-title">
                  ${shortTitle}
              </h3>
              <h4 class="products-price">
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


const fetchProductsApp = (url, generarNodos , container) => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
      generarNodos(data, container)    
      products = data    
      
  })
  .catch(error => console.error('Error fetching data:', error));
}

/*---------*/





categories.addEventListener("click", () => {

  const dropdownLinks = document.querySelectorAll(".dropdown-content a");
  let filteredProducts = []
  dropdownLinks.forEach((link) => {

      link.addEventListener("click", (event) => {

          const category = event.target.id;
          
          if (category === "item-woman") {
               filteredProducts = products.filter((producto) =>
                  producto.category.toLowerCase() === "women's clothing"
              );
              
              nodosCards(filteredProducts, containerCards);

          } else if (category === "item-mens") {
               filteredProducts = products.filter((producto) =>
                  producto.category.toLowerCase() === "men's clothing"
              );
              
              nodosCards(filteredProducts, containerCards);
          }
      });     
  }); 
});


const initialSetup = () => {
  fetchProductsApp("https://fakestoreapi.com/products", nodosCards, containerCards)
  sectionCart.style.display = 'none'
  sectionSignIn.style.display = 'none'
  sectionCreateAccount.style.display = 'none'
}

initialSetup()