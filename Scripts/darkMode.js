
document.addEventListener("DOMContentLoaded", function () {
    const buttonMode = document.querySelector("#data-theme-toggle");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    const localStorageTheme = getFromLocalStorage("theme");
    const currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
    buttonMode.checked = currentThemeSetting === "dark";
  
    document.querySelector("html").setAttribute("data-theme", currentThemeSetting);
  
    displayImgMode(currentThemeSetting);
  });
  

  function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    return systemSettingDark.matches ? "dark" : "light";
  }
  
  function displayImgMode(userMode) {
    
    const imgMode = document.getElementById("img-id-mode");

    userMode === "light" ?
      imgMode.setAttribute('src', "./Images/sun.png") :
      imgMode.setAttribute('src', "./Images/moon.jpeg");
  }
  


  const button = document.querySelector("#data-theme-toggle");
  
  button.addEventListener("click", (event) => {
    //toggle the logic 
    const newTheme = event.currentTarget.checked ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", newTheme);
  
    // save in localStorage
    saveInLocalStorage("theme", newTheme);
    saveInLocalStorage("buttonState", event.currentTarget.checked);
  
    // Display image depend on new theme 
    displayImgMode(newTheme);
  });