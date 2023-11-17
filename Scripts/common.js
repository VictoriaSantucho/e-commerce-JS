const saveInLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const removeFromLocalStorage = (key) => localStorage.removeItem(key)
