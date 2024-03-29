import React, { useEffect, useState } from 'react'
import './Select.css'

/**
 * platform Select.
 * @param {Object[]} options - The options to select.
 * @param {string} options.value - Value of the select, value to use when the option are seleted
 * @param {string} options.label - String to show in select.
 * @param {string} label - label to show on select.
 * @param {string} name - name to form manager.
 * @param {string} value - value to form manager.
 * @callback onChange - action to execute when a option is selected.
 * @param {bool} multiple - indicate if the select is multiple.
 * @param {boolean=true} emptyOption - that prop add a empty option in the select .
 */
export const Select = ({options = [],label = "", name, value, onChange, emptyOption=false}) => {

    return (
    <div className='select_single_wrapper'>  
        {label && <label className='select_label'>{label}</label>}
        <select 
            name={name} 
            onChange={onChange} 
            value={value} 
            className={"inputs custom_select"}
        >   
            {emptyOption && <option value={""}>Select an option please</option> }
            {options.map((opt)=>{
                return <option key={opt.value} value={opt.value}>{opt.label}</option>
            })}
        </select>
    </div>
    )
}
