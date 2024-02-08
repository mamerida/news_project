import React from 'react';
import './BasicPage.css';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';

export const BasicPage = ({headerChildren, children}) => {
  return (
    <div className='page'>
        <Header>
            {headerChildren}
        </Header>
        <section className='content'>
            {children}
        </section>
        <Footer/>
    </div>
  )
}
