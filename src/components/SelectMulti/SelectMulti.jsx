import React from 'react'
import Select from 'react-select';
import './SelectMulti.css'

export const SelectMulti = ({options = [],label = "", name, value, onChange, placeholder}) => {
  return (
    <div className='select_wrapper'>
        {label && <label className='select_label'>{label}</label>}
        <Select 
            name={name} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            className={"inputs custom_select select_single"}
            options={options}
            isMulti
        />   
    </div>
  )
}
