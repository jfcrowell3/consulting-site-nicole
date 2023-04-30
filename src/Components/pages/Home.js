import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import EmailCapture from '../EmailCapture';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <EmailCapture />
    </>
  );
};

export default Home;
