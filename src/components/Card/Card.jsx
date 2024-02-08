import React, { useState } from 'react';
import './Card.css';
import notAvalilableImage from '../../assets/imageNotAvailable.svg';

const AUTHOR_NOT_AVAILABLE = "Author not available"

export const Card = ({title, author, urlImage, description}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className='card_container' style={loaded ? {} : {display:"none"}}>
      <div className='card'>
        <header className='card_header'>
          <img
            src={urlImage || notAvalilableImage}
            alt='card_cover'
            onLoad={()=>setLoaded(true)}
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
