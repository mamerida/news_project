import React from 'react';
import './CustomInput.css';

const ENTER_KEY = "Enter"

/**
 * Select to the platform.
 * @param {string="text"} type - Type of input. number, text, password, mail, etc.
 * @param {string} placeholder - input placeholder.
 * @param {string} name - name to form manager.
 * @param {string} value - value to form manager.
 * @callback onChange - action to execute when write in input.
 * @callback onEnter - when press Enter and you defined a function execute that function.
 * @param {JSX.Element} icon - If you want you can show an icon betwen de text .
 * @param {Object} props - If you want pass another prop .
 */
export const CustomInput = ({type="text", placeholder, name, value, onChange, onEnter = null, icon, ...props}) => {

    const handleKeyDown = (e) => {
        if(e.key === ENTER_KEY){
            e.preventDefault();
            onEnter && onEnter();
        }
    }

    return (
    <div className='inputs input_container'>
        {icon &&
            <div className="input_icon">
                {icon}
            </div>
        }
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            onKeyDown={handleKeyDown}
            {...props}
        />
    </div>
    )
}
