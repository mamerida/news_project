import React from 'react';
import './Article.css';
import notAvalilableImage from '../../assets/imageNotAvailable.svg';

export const Article = ({urlImage ,title, description, url, content, author}) => {
  return (
    <article className='article_container'>
        {urlImage ? <img src={urlImage} /> : <img src={notAvalilableImage} /> }
        <h2>{title}</h2>
        <hr/>
          <section className='author_section'>
            <div>
              <span className='labels'>Author: </span><span>{author}</span>
            </div>
            <div>
              <span>Original: </span><a href={url} target="_blank" >Original Article</a>
            </div>
          </section>
        <hr/>
        <span>{description}</span>
        <p>
            {content}
        </p>
    </article>
  )
}
