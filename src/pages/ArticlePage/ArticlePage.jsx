import React, { useEffect, useState } from 'react';
import { Header } from '../../layout/Header/Header';
import { Footer } from '../../layout/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useNewsStore } from '../../store/newsStore';
import './ArticlePage.css';
import { Article } from '../../layout/Article/Article';
import { BasicPage } from '../BasicPage/BasicPage';

export const ArticlePage = () => {
    const [articleToShow, setArticleToShow] = useState({})
    const { news } = useNewsStore();
    const { title, publishedAt } = useParams();
    
    useEffect(()=>{
        setArticleToShow(news.find((nw)=> (nw.title === title && nw.publishedAt === publishedAt)))
    },[])
    return (
        <BasicPage>
            <section className='article_wrapper'>
                <Article  
                    urlImage={articleToShow.urlToImage} 
                    title={articleToShow.title} 
                    description={articleToShow.description}
                    url={articleToShow.url}
                    content={articleToShow.content}
                    author={articleToShow.author}
                />
            </section>
        </BasicPage>
    )
}
