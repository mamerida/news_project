import React from 'react';
import newsPaperlogo from '../../assets/newsPaper.svg';
import './Header.css';
import { WebName } from '../../components/WebName/WebName';
import { useNavigate } from 'react-router-dom';


export const Header = ({children}) => {

    const navigate = useNavigate();

    const goToHomePage = () =>{
        navigate("/news_project/");
    }

    return (
        <header className='header'>
            <div className='header_logo_container'>
                <img src={newsPaperlogo} alt='logo' className='header_logo' onClick={goToHomePage}/>
                <WebName/>
            </div>
            <div className='header_form_container'>
                {children}
            </div>
        </header>
    )
}
