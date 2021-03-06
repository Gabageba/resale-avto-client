import React, { useEffect } from "react";
import style from './Reference.module.css'
import logo from '../../assets/logo.svg'
import {FormattedMessage} from 'react-intl';
import Footer from '../../components/Footer/Footer';

const Reference = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])


  return (
    <div>
      {/*<h1 className={'header-info'}>О комании</h1>*/}
      <div className={style.company}>
        <img className={style.logo} src={logo} alt=""/>
        <div>
          <div className={style.companyInfo}><FormattedMessage id='about_p1' /></div>
          <div className={style.companyInfo}><FormattedMessage id='about_p2' /></div>
          <div className={style.companyInfo}><FormattedMessage id='about_p3' /></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Reference;