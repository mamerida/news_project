import React, { useState } from 'react';
import './Card.css';
import notAvalilableImage from '../../assets/imageNotAvailable.svg';

const AUTHOR_NOT_AVAILABLE = "Author not available";

/**
 * Cards to view a new resume.
 * @param {string} title - title of the new.
 * @param {string} author - title of the new.
 * @param {string} urlImage - provide a head of th card. If are null replace with placeholder.
 * @param {string} urlImage - provide a head of th card. If are null replace with placeholder.
 * @param {string} description - indicates type of button and change css.
 */
export const Card = ({title, author, urlImage, description}) => {

  return (
    <section className='card_container' >
      <div className='card'>
        <header className='card_header'>
          <img
            src={urlImage || notAvalilableImage}
            alt='card_cover'
          />
        </header>
        <section className='card_content'>
          <div className='title_container'>
            <span className='card_title'>{title}</span>
            <span className='card_author'> Author : {author || AUTHOR_NOT_AVAILABLE}</span>
          </div>
          <div className='paragraph_container'> 
            <p>
              {description}
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
