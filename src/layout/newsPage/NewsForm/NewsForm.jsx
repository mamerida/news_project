import React, { useCallback, useMemo, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { GiCancel } from "react-icons/gi";
import { TbFilterSearch } from "react-icons/tb";
import { TfiBrushAlt } from "react-icons/tfi";
import { FaFilter } from "react-icons/fa";
import { Select } from '../../../components/Select/Select';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { 
    CATEGORY,
    CATEGORY_OPTIONS,
    COUNTRY,
    COUNTRY_OPTIONS,
    DOMAINS, 
    ENDPOINT_OPTION, 
    ENDPOINT_T0_SEARCH, 
    EVERYTHING_OPTION, 
    EXCLUDE_DOMAINS, 
    FROM_DATE, 
    INITIAL_STATE, 
    LANGUAGE, 
    LANGUAGE_OPTION, 
    SHORT_BE_OPTIONS, 
    SORT_BY, 
    TEXT_SEARCH, 
    TO_DATE 
} from './constansts';
import './NewsForm.css';
import './FilterMenu.css';


export const NewsForm = () => {
    //that state save confirm options to search
    const [optionsToSeach, setOptionsToSeach] = useState(INITIAL_STATE);
    //that state indicate if are filters applied
    const [filterAreAplicated, setFilterAreAplicated] = useState(false);
    //this state save the filters meanwhile are editing
    const [temporalFilters, setTemporalFilters] = useState({})
    //manage show and hide filter menu
    const [openFilters, setOpenFilters] = useState(false);


    const handleShowfilters = () =>{
        setOpenFilters((current)=>!current)
        setTemporalFilters(optionsToSeach)
    }

    const onChangeText = (e) =>{
        setTemporalFilters((current)=>{
            return {...current, [TEXT_SEARCH]:e.target.value}
        })
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
        const newInitialState = INITIAL_STATE
        newInitialState[LANGUAGE] = []
        newInitialState[CATEGORY] = []
        newInitialState[COUNTRY] = []
        setOptionsToSeach(newInitialState)
        setTemporalFilters(newInitialState)
        setFilterAreAplicated(false);
    },[setTemporalFilters, setOptionsToSeach, setFilterAreAplicated])


    const submitForm = useCallback(()=>{
        console.log(optionsToSeach)
    },[optionsToSeach])

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

/**
 * Select to the platform.
 * @param {Object} values - object that is modified with this form .
 * @param {string} values.endpoint - Indicates where to look for news.
 * @param {string} values.q - text needed to search .
 * @param {string} values.domains - if you want you can select source where want to search the new.
 * @param {string} values.excludeDomains - exclude some domains to search .
 * @param {date} values.from -  date to indicate news published after this date.
 * @param {date} values.to - date to indicate news published before this date .
 * @param {Strings[]} values.language - select the news languges .
 * @param {string} values.sortBy - change sorting criteria .
 * @param {Strings[]} values.country - select news country .
 * @param {Strings[]} values.category - select news category.
 * @callback onSubmit - action to execute when submit filter form 
 * @callback onClear - action to execute when click clear button.
 * @callback onCancel - When you press the x button .
 * @callback onChange - When change some input in form.
 */

const FilterMenu = ({values, onSubmit, onClear, onCancel, onChange}) => {

    const handleChangeValue = useCallback((e,field) => {
        onChange(e.target.value, field)
      },[values, onChange])
    
    const manageMultiSelect = useCallback((value,field)=>{
        const selectedValues = values[field]
        const indexOption = selectedValues.indexOf(value)
        if(indexOption === -1){
            selectedValues.push(value)
        }else{
            selectedValues.splice(indexOption,1)
        }
        onChange(selectedValues, field)
    },[values, onChange])
    
    return (
      <section className='filters'>
          <div className='filter_section'>
            <div className='title_container'>
              <h2>Filters</h2>
              <Button
                icon={<GiCancel/>}
                type="clear"
                onClick={onCancel}            
              />
            </div>
            <div className='filter_container'>
            <Select
                label="Section where search"
                options={ENDPOINT_OPTION}
                value={values.endpoint}
                onChange={(e)=>handleChangeValue(e,ENDPOINT_T0_SEARCH)}
            />
            {values[ENDPOINT_T0_SEARCH] === EVERYTHING_OPTION ?
                <>
                    <Input
                        label="Domains separate by ,"
                        placeholder="google.com,yahoo.com"
                        value={values[DOMAINS]}
                        onChange={(e)=>handleChangeValue(e,DOMAINS)}
                    />
                    <Input
                        label="Exclude domains separate by ,"
                        placeholder="google.com,yahoo.com"
                        value={values[EXCLUDE_DOMAINS]}
                        onChange={(e)=>handleChangeValue(e,EXCLUDE_DOMAINS)}
                    />
                    <Input
                        label="From"
                        type="date"
                        value={values[FROM_DATE]}
                        max={values[TO_DATE]}
                        onChange={(e)=>handleChangeValue(e,FROM_DATE)}
                    />
                    <Input
                        label="To"
                        type="date"
                        min={values[FROM_DATE]}
                        value={values[TO_DATE]}
                        onChange={(e)=>handleChangeValue(e,TO_DATE)}
                    />
                    <Select
                        label="Select language"
                        multiple
                        options={LANGUAGE_OPTION}
                        value={values[LANGUAGE]}
                        onChange={(e)=>{manageMultiSelect(e.target.value,LANGUAGE)}}
                    />
                    <Select
                        label="Sort By"
                        options={SHORT_BE_OPTIONS}
                        value={values[SORT_BY]}
                        onChange={(e)=>handleChangeValue(e,SORT_BY)}
                    />
                </>
                :
                <>
                    <Select
                        label="Select Categories"
                        multiple
                        options={CATEGORY_OPTIONS}
                        value={values[CATEGORY]}
                        onChange={(e)=>manageMultiSelect(e.target.value,CATEGORY)}
                    />
                    <Select
                        label="Select country"
                        multiple
                        options={COUNTRY_OPTIONS}
                        value={values[COUNTRY]}
                        onChange={(e)=>manageMultiSelect(e.target.value,COUNTRY)}
                    />
                </>
            }

            <div className='button_container'>
                <Button
                    type="primary"
                    icon={<TbFilterSearch />}
                    onClick={onSubmit}
                    label="Apply filters"
                />
                <Button
                    type="secondary"
                    icon={<TfiBrushAlt />}
                    onClick={onClear}
                    label="Clear filters"
                />
            </div>
            </div>
          </div>
      </section>
    )
  }
  
