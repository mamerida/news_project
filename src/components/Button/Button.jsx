import React, { useCallback } from 'react';
import './Button.css';


/**
 * Buttons to the platform.
 * @param {JSX.Element} icon - If you want you can show an icon betwen de text .
 * @param {string} label - button label.
 * @callback onClick - action to execute when click the button.
 * @param {boolean} disabled - the button is disabled.
 * @param {type=primary|secondary|clear} type - indicates type of button and change css.
 * @param {Object} styleButton - if you want change other styles you can use style.
 * @param {Object} styleIcon - if you want change other styles you can use style.
 */

export const Button = ({icon, label, onClick, disabled=false, type="primary" , styleButton={}, styleIcon={} }) => {

    const handleClick = useCallback((e)=>{
        e.preventDefault();
        onClick && onClick();
    },[onClick])

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`buttons btn_${type}`}
            style={styleButton}
        >
            {icon &&
                <div className="icons_button" style={styleIcon}>
                    {icon}
                </div>
            }
            {label}
        </button>
    )
}
