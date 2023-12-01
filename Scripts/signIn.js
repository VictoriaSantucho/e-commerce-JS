const buttonSingIn = document.querySelector('.buttonSignIn')
const registrationForm = document.querySelector('#registrationForm')
const linkCreateAccount = document.querySelector('.linkCreateAccount')

const errorEmail = document.getElementById('emailError');
const emailSign = document.getElementById('emailSign')
const passSign = document.getElementById('passSign')

/*Validate inputs in Signin */
const validateSign = () => {
    let isvalidateSign = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearErrors(errorEmail)

    let emailSignValue = emailSign.value
    let passSignValue = passSign.value

    if (emailSignValue.trim() === '' || passSignValue.trim() === '') {
        alert('Please fill in all required fields.');
        return; // Stop further execution if validation fails
    } else if (!emailRegex.test(emailSignValue)) {
        errorEmail.textContent = 'Please enter a valid email address.';
        return; // Stop further execution if validation fails
    }else {
        isvalidateSign = true
        
    }
    return isvalidateSign
}

function clearErrors(element) {
    element.textContent = '';
}

/* Check if the user has already an account */
function validateUser(email) {
    let isValidateUser = false
    let positionThisUser = dataUsers.findIndex((value) => value.email == email);
    if (positionThisUser < 0) {
        toastMixin.fire({
            title: `You need create an account.`,
            icon:'warning',
            position:'top'

        });
        return 
    } else {
        userNameElement.textContent = dataUsers[positionThisUser].username;
        sectionProducts.style.display = 'flex'
        sectionSignIn.style.display = 'none'
        isValidateUser = true
        signInStatus.textContent = 'Logout'
    }

    return isValidateUser
    
} 

/* Register User and check if it's already an account*/

const addUser = (user) => {
    let positionThisUser = dataUsers.findIndex((value) => value.email == user.email);
    if(dataUsers.length <= 0){
        
        dataUsers = [{
            email:user.email, 
            username: user.username,
            password: user.password
        }];
        saveInLocalStorage('dataUsers', dataUsers);

    }else if(positionThisUser < 0){
        dataUsers.push(user);
        saveInLocalStorage('dataUsers', dataUsers);

    }else {
        toastMixin.fire({
            title: `You have already an account.`,
            icon:'warning',
            position:'top'

        });
    }
}


signInStatus.onclick = () => {
    const buttonText = signInStatus.textContent.trim();
    console.log(buttonText)
    if (buttonText.toLowerCase() === 'sign in') {
        sectionProducts.style.display = 'none'
        sectionSignIn.style.display = 'flex'
        sectionCreateAccount.style.display = 'none'
    }
    else if (buttonText.toLowerCase() === 'logout') {
        sectionProducts.style.display = 'flex'
        sectionSignIn.style.display = 'none'
        sectionCart.style.display = 'none'
        userNameElement.textContent = 'Guest' 
        signInStatus.textContent = 'Sign In'
    }
    
}

buttonSingIn.onclick = (e) =>{
    
    e.preventDefault()
    let emailSignValue = emailSign.value
    let isValidateSign = validateSign()
    isValidateSign && validateUser(emailSignValue)
}



linkCreateAccount.onclick = () => {
    sectionSignIn.style.display = 'none'
    sectionCreateAccount.style.display = 'flex'
}


registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailForm = document.getElementById('email')
    const emailErrorForm = document.getElementById('emailErrorForm')
    emailErrorForm.textContent = ''
    // Get form values
    const username = document.getElementById('username').value;
    const email = emailForm.value;
    const password = document.getElementById('password').value;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearErrors(emailErrorForm)

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all required fields.');
        return; // Stop further execution if validation fails
    
    }else if (!emailRegex.test(email)) {
        
        emailErrorForm.textContent = 'Please enter a valid email address.';
        return; // Stop further execution if validation fails
    }
 
    let userData = {
        email,
        username,
        password,
    };
    addUser(userData)
    sectionSignIn.style.display = 'flex'
    sectionCreateAccount.style.display = 'none'
});

