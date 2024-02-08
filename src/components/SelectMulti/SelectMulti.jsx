import React from 'react';
import Select from 'react-select';
import './SelectMulti.css';

/**
 * platform Select Mukti.
 * @param {Object[]} options - The options to select.
 * @param {string} options.value - Value of the select, value to use when the option are seleted
 * @param {string} options.label - String to show in select.
 * @param {string} label - label to show on select.
 * @param {string} name - name to form manager.
 * @param {string} value - value to form manager.
 * @callback onChange - action to execute when a option is selected.
 * @param {string} placeholder - label that show in select when there arent seleted option.
 * @param {Object} props - If you want you can pass other props. for styles for example
 */
export const SelectMulti = ({options = [],label = "", name, value, onChange, placeholder, ...props}) => {
  return (
    <div className='select_multi_wrapper'>
        {label && <label className='select_label'>{label}</label>}
        <Select 
            name={name} 
            className='select_multi'
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            options={options}
            isMulti
            {...props}
        />   
    </div>
  )
}
