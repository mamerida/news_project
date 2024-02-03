const BASE_URL = "https://newsapi.org/v2/everything"
//@ts-ignore
const API_KEY_URL= `?apikey=${import.meta.env.VITE_API_KEY}`
const METHOD_GET = "GET"
const APPLICATION_JSON = "application/json"


const callApi = async(url:string) =>{
    return fetch(url,{method: METHOD_GET})
    .then(res=>res.json())
    .then(res=> res && (res.articles))
}

const getNews = (word:string) =>{
    const url = BASE_URL + API_KEY_URL + "&" + "q=" + word
    return callApi(url)
}

export const Api = {
    getNews
}