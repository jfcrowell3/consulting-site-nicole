import React from 'react'
import EmailCapture from './EmailCapture'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer-container'>
      <EmailCapture />
      <section className='social-media'>
        <div className='social-media-wrap'>
          <Link to='/' className='social-logo'>
            <img src='/images/crown.png' alt='purple crown logo' />
            <div className='footer-logo-text'>
              <p className='logo-top'>Performance</p>
              <p className='logo-bottom'>Purple</p>
            </div>
          </Link>
          <small className='website-rights'> © All Rights Reserved</small>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link> */}
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/NicoleCrowell00'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://www.linkedin.com/in/nicole-crowell/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer