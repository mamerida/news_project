import { BasicPage } from "../BasicPage/BasicPage";
import  pageNotFound  from '../../assets/pageNotFound.svg';
import './ErrorPage.css';

export const ErrorPage = ( ) => {  
    return (
      <BasicPage>
        <div id="error-page">
          <section className='error_wrapper'>
              <img src={pageNotFound}/>
          </section>
        </div>
      </BasicPage>
    );
}