import React from 'react';
import newsPaperlogo from '../../assets/newsPaper.svg';
import './Header.css';


export const Header = ({children}) => {

    return (
        <header className='header'>
            <div className='header_logo_container'>
                <img src={newsPaperlogo} alt='logo' className='header_logo'/>
                <h1 className='header_title'>What's New?</h1>
            </div>
            <div className='header_form_container'>
                {children}
            </div>
        </header>
    )
}
