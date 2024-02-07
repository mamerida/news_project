import React, { useCallback } from 'react';
import { Button } from '../../components/Button/Button'
import { WebName } from '../../components/WebName/WebName'
import { AiOutlineGithub } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

import { TiSocialLinkedinCircular } from "react-icons/ti";
import './Footer.css';

const GO_TO_LINKEDIN = "https://www.linkedin.com/in/mario-merida-36a04319b/";
const GO_TO_GITHUB = "https://github.com/mamerida"

export const Footer = () => {

  const openNewTab = useCallback((url)=>{
    window.open(url, '_blank').focus();
  },[])

  const backToTop = useCallback(()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  },[])

  return (
    <footer className='footer_container'>
        <section className='footer_title_container'>
          <WebName/>
          <Button type="clear" icon={<FaArrowUp />} styleIcon={{fontSize:"3rem"}} onClick={backToTop}/>
        </section>
        <section className='elements_wrapper'>
        <h3>Follow us!</h3>
          <div className='button_container'>
              <Button styleIcon={{fontSize:"4rem"}} icon={<TiSocialLinkedinCircular />} type="clear" onClick={()=>{openNewTab(GO_TO_LINKEDIN)}} />
              <Button styleIcon={{fontSize:"3.6rem"}} icon={<AiOutlineGithub />} type="clear" onClick={(e)=>{openNewTab(e,GO_TO_GITHUB)}} />
          </div>
          <hr className='separator'/>
          <div className='rigths_reserved'>
            All rights reserved © 2024 What's New?
          </div>
        </section>
    </footer>
  )
}
