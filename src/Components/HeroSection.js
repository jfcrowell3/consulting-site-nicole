import React from 'react';
import { useEffect } from 'react';
// import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import EmailCapture from './EmailCapture';

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='hero-container' id='home'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Creative Strategy. Done right.</h1>
      <p>
        Offering Full Stack Creative Strategy & Creative Operations for DTC
        Brands & Agencies.
      </p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          FIND OUT MORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div> */}
      <EmailCapture />
    </div>
  );
};

export default HeroSection;
