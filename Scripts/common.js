const categories = document.getElementById("btn-dropdown")
const sectionCart = document.querySelector('.section-cart')
const sectionSignIn = document.querySelector('.section-signin')
const sectionCreateAccount = document.querySelector('.section-createAccount')
const sectionProducts = document.querySelector('.container-products');

const userNameElement = document.getElementById("userName")
let signInStatus = document.getElementById('signInStatus')


const saveInLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));


let dataUsers = getFromLocalStorage("dataUsers") || []
let shoppingCart = getFromLocalStorage("shoppingCart") || []

let toastMixin = Swal.mixin({
    toast: true,
    animation: false,
    showConfirmButton: false,
    timer: 1400
  });

const removeFromLocalStorage = (shoppingcart,idProduct) => {
    const indexToRemove = shoppingcart.findIndex(item => item.product.id === idProduct);
    if (indexToRemove !== -1) {    
        shoppingcart.splice(indexToRemove, 1);
}
    saveInLocalStorage('shoppingCart', shoppingcart)
}
 

const getProducts = (className, data) => {
    const parts = className.split('-');
    const idProduct = parts[1]
      
    return data.find(element => 
        element.id === Number(idProduct)
    )
}
