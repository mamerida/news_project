import React from 'react'
import { NewsForm } from '../../layout/newsPage/NewsForm/NewsForm'
import { useNewsStore } from '../../store/newsStore';
import { useIsLoadingStore } from '../../store/isLoading';
import { Card } from '../../components/Card/Card';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { BasicPage } from '../../layout/BasicPage/BasicPage';
import { Spinner } from '../../components/Spinner/Spinner';
import { NothingHere } from '../../layout/NothingHere/NothingHere';


export const HomePage = () => {
  const { news, setSelectedNews } = useNewsStore();
  const { isLoading } = useIsLoadingStore();
  const navigate = useNavigate();

  const goToDetails = (nw) =>{
    setSelectedNews(nw)
    navigate(`/news_project/article/${nw.title}`)
  }
  
  return(
    <BasicPage headerChildren={<NewsForm/>}>
      <section className='home_page'>
          <>
          {isLoading ? 
              <div className='spinner_container'><Spinner/></div> 
            :
              <>
                {(!news || news.length === 0) ?
                  <>
                    <NothingHere/>
                  </>
                :
                  <section className='card_list_container'>
                    {news.map((nw) => (
                      <div key={nw.url} onClick={()=>{goToDetails(nw)}}> 
                        <Card 
                          title={nw.title} 
                          author={nw.author} 
                          urlImage={nw.urlToImage} 
                          description={nw.description}
                        />
                      </div>
                    ))}
                  </section>
                }
              </>
          }
          </>
      </section>
    </BasicPage>
  )
}