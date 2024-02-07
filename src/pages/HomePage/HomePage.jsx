import React from 'react'
import { NewsForm } from '../../layout/newsPage/NewsForm/NewsForm'
import { useNewsStore } from '../../store/newsStore';
import { useIsLoadingStore } from '../../store/isLoading';
import { Card } from '../../components/Card/Card';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { BasicPage } from '../BasicPage/BasicPage';

export const HomePage = () => {
  const { news } = useNewsStore();
  const { isLoading } = useIsLoadingStore();
  const navigate = useNavigate();

  const goToDetails = (nw) =>{
    navigate(`/article/${nw.title}/${nw.publishedAt}`)
  }
  
  return(
    <BasicPage headerChildren={<NewsForm/>}>
      <section className='home_page'>
          <section className='card_list_container'>
          {isLoading ? <div>CARGANDO</div> :
            <>
              {news && news.map((nw)=>{
                return <div key={nw.url} onClick={()=>{goToDetails(nw)}}>
                <Card 
                  title={nw.title} 
                  author={nw.author} 
                  urlImage={nw.urlToImage} 
                  description={nw.description}
                />
                </div>
              })}
            </> 
          }
          </section>
      </section>
    </BasicPage>
  )
}