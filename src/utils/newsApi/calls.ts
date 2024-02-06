import { 
    CATEGORY,
    COUNTRY,
    DOMAINS,
    ENDPOINT_T0_SEARCH, 
    EVERYTHING_OPTION, 
    EXCLUDE_DOMAINS, 
    FROM_DATE, 
    LANGUAGE, 
    SORT_BY, 
    TEXT_SEARCH,
    TOP_HEAD_OPTION,
    TO_DATE
} from "../../layout/newsPage/constansts"
import { EverythingParams, FiltersForm, TopParams } from "./Interface"

const BASE_URL = "https://newsapi.org/v2/"
//@ts-ignore
const API_KEY_URL= `?apikey=${process.env.VITE_API_KEY}`
const METHOD_GET = "GET"


const callApi = async(url:string ,method:string) =>{
    return fetch(url,{method: method})
    .then(res=>res.json())
    .then(res=> res && (res.articles))
}

const arrayConverterToProps = (arr:Array<String>) =>{
    let urlOption="" 
    arr.forEach((opt,index:Number)=>{
        if(index === arr.length || index === 0 ){
            urlOption += opt
        }else{
            urlOption += ","+opt
        }
    })
    return urlOption;
}

const buildURL = (url:string, parameters: EverythingParams | TopParams) =>{
    let finalUrl = url;
    for(const param in parameters){
        if( param === LANGUAGE || param === COUNTRY || param === CATEGORY ){
            if(parameters[param].length > 0) finalUrl += "&" + param +"="+ arrayConverterToProps(parameters[param])
        }else{
            if(parameters[param] !== "") finalUrl += "&" + param +"="+ parameters[param]
        }
    }
    return finalUrl
}

const getNews = (form:FiltersForm) =>{
    let callUrl = BASE_URL
    let urlWithParams = "";
    if(form[ENDPOINT_T0_SEARCH] === EVERYTHING_OPTION){
        callUrl +=  EVERYTHING_OPTION+ API_KEY_URL
        urlWithParams = buildURL(
            callUrl,
            {
                [TEXT_SEARCH]:form[TEXT_SEARCH],
                [DOMAINS]:form[DOMAINS],
                [EXCLUDE_DOMAINS]:form[EXCLUDE_DOMAINS],
                [FROM_DATE]:form[FROM_DATE],
                [TO_DATE]:form[TO_DATE],
                [LANGUAGE]: form[LANGUAGE],
                [SORT_BY]: form[SORT_BY]
            })
    }else{
        callUrl +=  TOP_HEAD_OPTION+ API_KEY_URL
        urlWithParams = buildURL(
            callUrl,
            {
                [TEXT_SEARCH]:form[TEXT_SEARCH],
                [COUNTRY]:form[COUNTRY],
                [CATEGORY]:form[CATEGORY],
            })
    }

    return callApi(urlWithParams,METHOD_GET)
}

export const Api = {
    getNews
}