import React, { useEffect } from 'react'
import { NewsForm } from '../../layout/newsPage/NewsForm/NewsForm'
import { Header } from '../../layout/Header/Header'
import { useNewsStore } from '../../store/newsStore';
import { useIsLoadingStore } from '../../store/isLoading';

export const HomePage = () => {
  const { news } = useNewsStore();
  const { isLoading } = useIsLoadingStore();
  return(
    <>
        <Header>
          <NewsForm/>
        </Header>
      <div>
        
        <div>HomePage</div>
        {isLoading ? <div>CARGANDO</div> : 
          <>
          {news && news.map((nw)=>{
            return <span>{nw.title}</span>
          })}
          </>
      }
      </div>
    </>
  )
}
