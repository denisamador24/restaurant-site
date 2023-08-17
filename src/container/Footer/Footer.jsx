import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <footer className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
  </footer>
);

export default Footer;
