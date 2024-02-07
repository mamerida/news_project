import { LocalStorage } from "../localstorage/localStorage";

const KEY_LOCAL_STORAGE = "news_filters";


export const setFiltersInLocalStorage = (value) =>{
    LocalStorage.setItems( KEY_LOCAL_STORAGE, JSON.stringify(value))
}

export const getFiltersInLocalStorage = () =>{
     return JSON.parse(LocalStorage.getItems(KEY_LOCAL_STORAGE))
}

export const clearFiltersInLocalStorage = () =>{
    return JSON.parse(LocalStorage.clearLocalStorage())
}