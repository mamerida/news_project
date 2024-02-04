import React, { useCallback } from 'react';
import './CustomButton.css';


/**
 * Select to the platform.
 * @param {JSX.Element} icon - If you want you can show an icon betwen de text .
 * @param {string} label - button label.
 * @callback onClick - action to execute when click the button.
 * @param {boolean} disabled - the button is disabled.
 * @param {type=primary|secondary|clear} type - indicates type of button and change css.
 */

export const CustomButton = ({icon, label, onClick, disabled=false, type="primary" }) => {

    const handleClick = useCallback((e)=>{
        e.preventDefault();
        onClick && onClick();
    },[onClick])

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`buttons btn_${type}`}
        >
            {icon &&
                <div className="icons_button">
                    {icon}
                </div>
            }
            {label}
        </button>
    )
}
