import { useRouteError } from "react-router-dom";
import { Header } from '../../layout/Header/Header';
import { Footer } from '../../layout/Footer/Footer';
import  pageNotFound  from '../../assets/pageNotFound.svg';
import './ErrorPage.css';

export const ErrorPage = ( ) => {
    const error = useRouteError();
  
    return (
      <div id="error-page">
        <Header/>
        <section className='error_wrapper'>
            <img src={pageNotFound}/>
        </section>
        <Footer/>
      </div>
    );
}