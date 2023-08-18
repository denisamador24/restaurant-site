import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <p className='headtext__cormorant'>Subcribe To Our Newsletter</p>
      <p className='p__opensans'>And never miss laest Updates!</p>
    </div>
    <div className='app__newsletter-input'>
      <input placeholder='Email Address' type="text" />
      <button className='custom__button'>Suscribe</button>
    </div>
  </div>
);

export default Newsletter;
