import React from 'react';
import newsPaperlogo from '../../assets/newsPaper.svg';
import './Header.css';
import { WebName } from '../../components/WebName/WebName';


export const Header = ({children}) => {

    return (
        <header className='header'>
            <div className='header_logo_container'>
                <img src={newsPaperlogo} alt='logo' className='header_logo'/>
                <WebName/>
            </div>
            <div className='header_form_container'>
                {children}
            </div>
        </header>
    )
}
