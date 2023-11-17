
document.addEventListener("DOMContentLoaded", function () {
    const buttonMode = document.querySelector("#data-theme-toggle");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    const localStorageTheme = getFromLocalStorage("theme");
    const currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
    // Fijar el estado del botón según el theme  
    buttonMode.checked = currentThemeSetting === "dark";
  
    // Establecer el theme al cargar la página
    document.querySelector("html").setAttribute("data-theme", currentThemeSetting);
  
    // Mostrar la imagen según el theme actual
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
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    const localStorageTheme = getFromLocalStorage("theme");
  
    // Invertir la lógica para reflejar el clack del botón
    const newTheme = event.currentTarget.checked ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", newTheme);
  
    // Guardar en el local storage
    saveInLocalStorage("theme", newTheme);
    saveInLocalStorage("buttonState", event.currentTarget.checked);
  
    // Mostrar la imagen basada en el nuevo tema
    displayImgMode(newTheme);
  });