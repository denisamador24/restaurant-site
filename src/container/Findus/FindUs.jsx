import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <section id='contact' className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <p className='headtext__cormorant' style={{ marginBlock: '3rem' }}>Find Us</p>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Openig Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>View More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Find us" />
    </div>
  </section>
);

export default FindUs;
