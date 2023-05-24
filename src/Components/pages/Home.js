import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Brands from '../Brands';
import Process from '../Process';
import Services from '../Services';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Process />
      <Services />
      <Brands />
      <AboutMe />
    </div>
  );
};

export default Home;
