const setItems = (key,value) => {
    localStorage.setItem(key, value);
}


const getItems = (key) => {
    return localStorage.getItem(key) || null 
}


const clearLocalStorage = () =>{
    localStorage.clear();
}

export const LocalStorage = {
    setItems,
    getItems,
    clearLocalStorage
}