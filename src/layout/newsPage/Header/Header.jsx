import React from 'react';
import newsPaperlogo from '../../../../public/newsPaper.svg';
import { NewsForm } from '../NewsForm/NewsForm';
import './Header.css';


export const Header = () => {

    return (
        <header className='header'>
            <div className='header_logo_container'>
                <img src={newsPaperlogo} alt='logo' className='header_logo'/>
                <h1 className='header_title'>What's New?</h1>
            </div>
            <div className='header_form_container'>
                <NewsForm/>
            </div>
        </header>
    )
}
