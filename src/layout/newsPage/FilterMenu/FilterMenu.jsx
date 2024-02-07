import React, { useCallback } from "react";
import { GiCancel } from "react-icons/gi";
import { TbFilterSearch } from "react-icons/tb";
import { TfiBrushAlt } from "react-icons/tfi";
import './FilterMenu.css';
import { Button } from "../../../components/Button/Button";
import { Select } from "../../../components/Select/Select";
import { 
    CATEGORY, 
    CATEGORY_OPTIONS, 
    COUNTRY, 
    COUNTRY_OPTIONS, 
    DATE_LIMIT, 
    DOMAINS, 
    ENDPOINT_OPTION, 
    ENDPOINT_T0_SEARCH, 
    EVERYTHING_OPTION, 
    EXCLUDE_DOMAINS, 
    FROM_DATE, 
    LANGUAGE, 
    LANGUAGE_OPTION, 
    SHORT_BY_OPTIONS, 
    SORT_BY, 
    TO_DATE 
} from "../constansts";
import { Input } from "../../../components/Input/Input";

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

export const FilterMenu = ({values, onSubmit, onClear, onCancel, onChange}) => {

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
          <section className='filter_section'>
            <div className="filters_form">
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
                        <Select
                            label="Sort By"
                            options={SHORT_BY_OPTIONS}
                            name={SORT_BY}
                            emptyOption
                            value={values[SORT_BY]}
                            onChange={(e)=>handleChangeValue(e,SORT_BY)}
                        />
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
                            min={DATE_LIMIT}
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
                            name={LANGUAGE}
                            options={LANGUAGE_OPTION}
                            value={values[LANGUAGE]}
                            onChange={(e)=>{manageMultiSelect(e.target.value,LANGUAGE)}}
                        />
                    </>
                    :
                    <>
                        <Select
                            label="Select Category"
                            multiple
                            options={CATEGORY_OPTIONS}
                            name={CATEGORY}
                            value={values[CATEGORY]}
                            onChange={(e)=>manageMultiSelect(e.target.value,CATEGORY)}
                        />
                        <Select
                            label="Select Country"
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
      </section>
    )
  }
  
