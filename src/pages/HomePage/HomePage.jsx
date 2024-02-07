import React, { useEffect } from 'react'
import { NewsForm } from '../../layout/newsPage/NewsForm/NewsForm'
import { Header } from '../../layout/Header/Header'
import { useNewsStore } from '../../store/newsStore';
import { useIsLoadingStore } from '../../store/isLoading';
import { Card } from '../../components/Card/Card';
import './HomePage.css';
import { Footer } from '../../layout/Footer/Footer';

export const HomePage = () => {
  const { news } = useNewsStore();
  const { isLoading } = useIsLoadingStore();
  return(
    <>
      <Header>
        <NewsForm/>
      </Header>
      <section className='home_page'>
          <section className='card_list_container'>
          {isLoading ? <div>CARGANDO</div> :
            <>
              {news && news.map((nw)=>{
                return <Card key={nw.title + nw.publishedAt} title={nw.title} author={nw.author} urlImage={nw.urlToImage} description={nw.description}/>
              })}
            </> 
          }
          </section>
      </section>
      <Footer/>
    </>
  )
}
