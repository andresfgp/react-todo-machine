
import React from 'react';
import '../assets/styles/components/Footer.css';
import outlook from '../assets/static/outlook.png';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';
import whatsapp from '../assets/static/whatsapp.png';
import twitter from '../assets/static/twitter.png';
import facebook from '../assets/static/facebook.png';
import instagram from '../assets/static/instagram.png';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <h3>Let's create something new!</h3>
      <div className='footer__img'>
        <div className='footer__img-sec1'>
          <a href='mailto:andres.fgp@hotmail.com' target='_blank' rel='noreferrer'><img src={outlook} alt='outlook' /></a>
          <a href='https://www.linkedin.com/in/andfgp/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' /></a>
          <a href='https://github.com/andresfgp' target='_blank' rel='noreferrer'><img src={github} alt='github' /></a>
          <a href='https://api.whatsapp.com/send?phone=573147931680&text=Hello!%20Andr%C3%A9s,%20Let%27s%20work%20together!' target='_blank' rel='noreferrer'><img src={whatsapp} alt='whatsapp' /></a>
        </div>
        <div className='footer__img-sec2'>
          <a href='https://twitter.com/andfgp' target='_blank' rel='noreferrer'><img src={twitter} alt='twitter' /></a>
          <a href='https://www.facebook.com/undostresporandres/' target='_blank' rel='noreferrer'><img src={facebook} alt='facebook' /></a>
          <a href='https://www.instagram.com/andresfgp/' target='_blank' rel='noreferrer'><img src={instagram} alt='instagram' /></a>
        </div>
      </div>
    </footer>
  );
};

export {Footer};