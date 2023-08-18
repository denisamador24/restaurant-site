import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <footer className='app__footer section__padding'>
    <FooterOverlay />
    
    <div className='app__footer-conteiner'>
      <Newsletter />
      <div className='app__footer-links'>
        <div className='app__footer-links_content'>
          <p className='app__footer-links_content-title p__cormorant'>Contact Us</p>
          <div className='p__opensans'>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
        </div>
        <div className='app__footer-links_gericht'>
          <p className='app__footer-links_gericht-title p__cormorant'>Gerícht</p>
          <div className='p__opensans'>
            <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={images.spoon} alt="spoon" />
            <div className='app__footer-links_gericht-icons'>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>
        <div className='app__footer-links_content'>
          <p className='app__footer-links_content-title p__cormorant'>Working</p>
          <div className='p__opensans'>
            <p>Monday-Friday:<br /> 08:00 am -12:00 am</p>
            <p>Saturday-Sunday:<br/> 07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p className='p__opensans'>2023 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
