import React from 'react';
import { useEffect } from 'react';
import './HeroSection.css';
import '../App.css';
import EmailCapture from './EmailCapture';

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='hero-container' id='home'>
      <video src='/videos/video-2.mp4' autoPlay loop muted playsinline/>
      <div className='headline'>
        <h1>Creative Strategy. Done Right.</h1>
      </div>
      <p>
        Offering Full Stack Creative Strategy & Creative Operations for DTC
        Brands & Agencies.
      </p>
      <EmailCapture />
    </div>
  );
};

export default HeroSection;
