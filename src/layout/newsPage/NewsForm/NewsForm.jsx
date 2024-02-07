import React, { useCallback, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { FaFilter } from "react-icons/fa";
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { 
    CATEGORY,
    COUNTRY,
    ERROR_MESSAGE,
    INITIAL_STATE, 
    LANGUAGE,  
    TEXT_SEARCH, 
} from '../constansts';
import './NewsForm.css';
import { FilterMenu } from '../FilterMenu/FilterMenu';
import { Api } from '../../../utils/newsApi/calls';
import { useNewsStore } from '../../../store/newsStore'
import { useIsLoadingStore } from '../../../store/isLoading';
import { clearFiltersInLocalStorage, getFiltersInLocalStorage, setFiltersInLocalStorage } from '../../../utils/newsApi/filterLocalStorage';


export const NewsForm = () => {
    //that state save confirm options to search
    const [optionsToSeach, setOptionsToSeach] = useState(INITIAL_STATE);
    //that state indicate if are filters applied
    const [filterAreAplicated, setFilterAreAplicated] = useState(false);
    //this state save the filters meanwhile are editing
    const [temporalFilters, setTemporalFilters] = useState({})
    //manage show and hide filter menu
    const [openFilters, setOpenFilters] = useState(false);
    const {news ,setNews} = useNewsStore()
    const {setIsLoading} = useIsLoadingStore()

    const handleShowfilters = () =>{
        setOpenFilters((current)=>!current)
        setTemporalFilters(optionsToSeach)
    }

    const onChangeText = (e) =>{
        setOptionsToSeach((current)=>{
            return {...current, [TEXT_SEARCH]:e.target.value}
        })
    }

    const handleChangeFilters = useCallback((value,field)=>{
        setTemporalFilters((current)=>{
            return {...current, [field]:value}
        })
    },[setTemporalFilters])

    const onSubmitFilterForm = useCallback(()=>{
        setOptionsToSeach(temporalFilters)
        handleShowfilters();
        setFilterAreAplicated(true);
    },[temporalFilters, setOptionsToSeach, handleShowfilters, optionsToSeach])

    const clearFilters = useCallback(()=>{
        const newInitialState = INITIAL_STATE;
        newInitialState[LANGUAGE] = [];
        newInitialState[CATEGORY] = [];
        newInitialState[COUNTRY] = [];
        //clear the state 
        setOptionsToSeach(newInitialState);
        // turnoff the flag
        setFilterAreAplicated(false);
        //close modal
        setOpenFilters((current)=>!current);
        //clear localHost
        clearFiltersInLocalStorage();
    },[setTemporalFilters, setOptionsToSeach, setFilterAreAplicated, setOpenFilters])


    const callApi = (parameters) =>{
        setIsLoading(true);
        Api.getNews(parameters).then(res=>{
            setNews(res)
        }).catch(()=>{
            window.alert(ERROR_MESSAGE)
            setNews([])
        }).finally(()=>{
            setIsLoading(false);
        })
    }

    const submitForm = useCallback(()=>{
        setIsLoading(true);
        setFiltersInLocalStorage(optionsToSeach);
        callApi(optionsToSeach);
    },[optionsToSeach, setNews, callApi])

    useEffect(()=>{
        let filters = getFiltersInLocalStorage();
        if (filters) {
            setOptionsToSeach(filters);
            if((news && news.length === 0)) callApi(filters);
        }
    },[])

    return (
        <form className='form_container'>
            <Input
                type="text"
                placeholder={"Find your next new!!"}
                value={optionsToSeach[TEXT_SEARCH]}
                onChange={onChangeText}
                icon={<FaSearch />}
            />
            <Button icon={filterAreAplicated ?  <FaFilter /> :<LiaFilterSolid />} type="clear" onClick={handleShowfilters} />
            <Button icon={<FaSearch />} type="primary"  label="Search" onClick={submitForm} disabled={optionsToSeach[TEXT_SEARCH] === ""}/>
           {openFilters && 
            <FilterMenu 
                onSubmit={onSubmitFilterForm} 
                onCancel={handleShowfilters} 
                values={temporalFilters} 
                onChange={handleChangeFilters}
                onClear={clearFilters}
            /> }
        </form>
    )
}