import React, { useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import './NavBar.css';
import * as Scroll from 'react-scroll';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollTop = () => Scroll.animateScroll.scrollToTop();

  return (
    <>
      <div className='banner-container'>
        <p>Get expert advice for free! Book your 15-minute call today</p>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <LinkR
            to='/'
            className='navbar-logo'
            onClick={() => {
              closeMobileMenu();
              scrollTop();
            }}
          >
            <img src='/images/crown.png' alt='purple crown logo' />
            <div className='logo-text'>
              <p className='logo-top'>Performance</p>
              <p className='logo-bottom'>Purple</p>
            </div>
          </LinkR>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkS
                to='home'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-125}
                duration={500}
              >
                Home
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='services'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                Services
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='the-process'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                The Process
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='about-me'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                About Me
              </LinkS>
            </li>
            <li>
              <LinkS
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Book A Call
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
