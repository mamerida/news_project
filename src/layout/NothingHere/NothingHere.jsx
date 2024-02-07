import React from 'react';
import nothingHere from '../../assets/nothingHere.svg';
import './NothingHere.css';

export const NothingHere = () => {
  return (
    <section className='nothing_here_container'>
        <img src={nothingHere} />
        <h3>Nothing Here please use anothers filters</h3>
    </section>
  )
}
