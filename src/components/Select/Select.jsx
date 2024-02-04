import React, { useEffect, useState } from 'react'
import "./Select.css"

const defaultEmptyOption = [{value:"", label:""}];


/**
 * Select to the platform.
 * @param {Object[]} options - The options to select.
 * @param {string} options.value - Value of the select, value to use when the option are seleted
 * @param {string} options.label - String to show in select.
 * @param {string} name - name to form manager.
 * @param {string} value - value to form manager.
 * @callback onChange - action to execute when a option is selected.
 * @param {boolean=true} emptyOption - that prop add a empty option in the select .
 */
export const Select = ({options = [], name, value, onChange, emptyOption=true}) => {
    const [optionsSelect, setOptionsSelect] = useState(options)

    useEffect(()=>{
        if(emptyOption) setOptionsSelect([...defaultEmptyOption,...options])
    },[options,emptyOption])

    return (
    <>
        <select name={name} onChange={onChange} value={value} className="inputs custom_select">
            {optionsSelect.map((opt)=>{
                return <option key={opt.value} value={opt.value}>{opt.label}</option>
            })}
        </select>
    </>
    )
}
