import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

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
            <ul className={readMore ? 'show-list' : 'hide-list'}>
              <li>1-Off Consulting Calls</li>
              <li>A Creative Evaluation / Audit</li>
              <li>1-Off Briefs/Projects</li>
              <li>1-Time Creative Operations Set Ups</li>
            </ul>
          </div>
        </div>
        <div className='services-wrapper'>
          <h2>Recurring Services</h2>
          <div className='services-image'>
            <img src='/images/lightbulb.jpg' alt='Lightbulb in hand' />
          </div>
          <div className={readMore ? 'expanded-div' : 'hidden-div'}>
            <ul className={readMore ? 'show-list' : 'hide-list'}>
              <li>Ongoing Consulting</li>
              <li>Fraction Creative Strategy Services</li>
              <li>Month to Month Projects</li>
              <li>Coaching or Mentorship</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <Link to='https://calendly.com/nicolecrowell/15-mins-call-w-nicole-crowell-website'>
          <button className='book-btn' type='button'>
            Book A Call
          </button>
        </Link>
      </div>
      <i
        className={readMore ? 'fas fa-angle-up' : 'fas fa-angle-down'}
        onClick={handleClick}
      />
    </section>
  );
};

export default Services;
