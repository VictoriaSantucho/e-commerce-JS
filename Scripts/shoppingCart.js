let iconCartHTM = document.querySelector("#iconCart");
let listCartHTML = document.querySelector('.listCart');
let cartProductContainer = document.querySelector(".cart-products")
let buttonClose = document.querySelector(".buttonClose")


const addToShoppingCart = (product) => {
    
    let positionThisProductInCart = shoppingCart.findIndex((value) => value.product.id == product.id);
    if(shoppingCart.length <= 0){
        shoppingCart = [{
            product: product,
            quantity: 1
        }];

    }else if(positionThisProductInCart < 0){
        shoppingCart.push({
            product: product,
            quantity: 1
        });

    }else{
        shoppingCart[positionThisProductInCart].quantity = shoppingCart[positionThisProductInCart].quantity + 1;
    }
    
}

const addCartToHTML = (currentShoppingCart) => {

   // let productContainer = document.querySelector(".products")
    let cartCost = totalCost(currentShoppingCart)
    
    if(currentShoppingCart.length > 0) {
        cartProductContainer.innerHTML = '';
        currentShoppingCart.forEach(item => {
            const shortTitle = item.product.title.split(" ").splice(0,3).join(" ")
            cartProductContainer.innerHTML += `
            <div class='cart-product'>
                <ion-icon name="close-circle" class='close-icon cart-iconClose' id="cart-${item.product.id}"></ion-icon>
                <figure class="cart-container-img">
                <img src='${item.product.image}'>
              </figure>
                
                <span>'${shortTitle}'</span>
            </div>
            <div class='cart-price'>$${item.product.price}</div>   
            <div class='cart-quantity'>
            ${item.quantity}
            </div>
            <div class='cart-total'>
                $${item.product.price * item.quantity}
            </div>
                
            `
        })
    
    cartProductContainer.innerHTML += `
        <div class='cart-container-totalCost'>
            <h4 class='cart-totalCost-title'>Total</h4>
            <h4 class='cart-totalCost'>$${cartCost}</h4>
        </div>    
    `
    }else {
        cartProductContainer.innerHTML = ''
    }
}


// Calculate the number of products and it's asigned to the icon cart
function numberIconCart(shoppingCart, container) {
    let totalNumber = `
    <span class="shopping-amount-products">${shoppingCart.length}</span>
    `
    container.innerHTML = totalNumber
}

function totalCost(shoppingCart) {
    let totalPrice = 0
    shoppingCart.forEach( element => {
        totalPrice += element.product.price * element.quantity 
    })

    return +totalPrice.toFixed(2)
}

const removeCartProductHTML = () => {
    let currentShoppingCart = getFromLocalStorage("shoppingCart")
    addCartToHTML(currentShoppingCart)
}



document.body.onclick = (event) => {
    
    if(event.target.classList.contains("addcart")){  
            addToShoppingCart(getProducts(event.target.id, products))        
            saveInLocalStorage("shoppingCart", shoppingCart)
            numberIconCart(shoppingCart, iconCart)
            totalCost(shoppingCart)
            toastMixin.fire({
                title: `The product has been added to the shopping cart.`,
                icon:'success',
                position:'top'

            });
        } 

    }


cartProductContainer.onclick = (event) => {
    
    let productsCart= shoppingCart.map(item => item.product ) 
    
    if(event.target.classList.contains("close-icon")){     
        const productToremove =  getProducts(event.target.id, productsCart)
        let productToremoveId = productToremove.id
        removeFromLocalStorage(shoppingCart,productToremoveId)    
        numberIconCart(shoppingCart, iconCart)
    }
    removeCartProductHTML()
}


// here when the icon cart is clicked this must to show the section with the list of products
iconCartHTM.onclick = (event) => {
    let user = userNameElement.textContent !== 'Guest' 
    
    if (user) {
    let currentShoppingCart = getFromLocalStorage("shoppingCart")
    sectionProducts.style.display = 'none'
    sectionCart.style.display = 'block'
   
    addCartToHTML(currentShoppingCart)    
    }else {

            toastMixin.fire({
                 title: 'You need to sign in to continue.',
                 position: 'top-right',
                 icon:'warning'
             });
}
}


buttonClose.onclick = () => {
    sectionProducts.style.display = 'flex'
    sectionCart.style.display = 'none'
    
}

//Inizializing the nunber of products in the shopping cart
numberIconCart(shoppingCart, iconCart)
    