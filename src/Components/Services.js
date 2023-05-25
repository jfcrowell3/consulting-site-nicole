import React, { useState } from 'react';
import './Services.css';
import { Button } from './Button';

const Services = () => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readMore);
  };

  return (
    <section className='services-section' id='services'>
      <h1>Services</h1>
      <div className='services-container'>
        <div className='services-wrapper'>
          <h2>One-Time Services</h2>
          <div className='services-image'>
            <img src='/images/img-1.jpg' alt='' />
          </div>
          <div className={readMore ? 'expanded-div' : 'hidden-div'}>
            <ul>
              <li>One FREE 15min intro call</li>
              <li>30, 45, or 60min call</li>
              <li>Short form Q&A</li>
              <li>Quick audit of Facebook, Instagram or Tiktok account</li>
              <li>Tips on how to save time and money</li>
              <li>All calls can be recorded by you and saved forever</li>
            </ul>
            <div className='button-container'>
              <button className='book-btn'>Schedule One-time Call</button>
            </div>
          </div>
        </div>
        <div className='services-wrapper'>
          <h2>Recurring Services</h2>
          <div className='services-image'>
            <img src='/images/lightbulb.jpg' alt='Lightbulb in hand' />
          </div>
          <div className={readMore ? 'expanded-div' : 'hidden-div'}>
            <ul>
              <li>4 tiers of monthly services</li>
              <li>A package and price for everyone</li>
              <li>Point 1</li>
              <li>Point 1</li>
            </ul>
            <div className='button-container'>
              <button className='book-btn'>Schedule Recurring Call</button>
            </div>
          </div>
        </div>
      </div>
      <i
        className={readMore ? 'fas fa-angle-up' : 'fas fa-angle-down'}
        onClick={handleClick}
      />
    </section>
  );
};

export default Services;