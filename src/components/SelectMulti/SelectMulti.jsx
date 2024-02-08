import React from 'react'
import Select from 'react-select';
import './SelectMulti.css'

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
