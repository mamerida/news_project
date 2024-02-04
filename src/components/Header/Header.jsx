import React from 'react';
import newsPaperlogo from '../../../public/newsPaper.svg';
import './header.css';

export const Header = () => {
  return (
    <header className='header'>
        <img src={newsPaperlogo} alt='logo' className='header_logo'/>
        <h1 className='header_title'>What's New?</h1>
    </header>
  )
}
