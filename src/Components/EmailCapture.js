import React from 'react';
import { Button } from './Button';
import './EmailCapture.css'

const EmailCapture = () => {
  return (
    <div className='email-container'>
      {/* <h2>Newsletter</h2> */}
      <p>
        For weekly tips on how to improve your creative strategy sign up for my
        newsletter!
      </p>
      <form>
        <input
          className='footer-input'
          name='email'
          type='email'
          placeholder='Your Email'
        />
        <Button buttonStyle='btn--outline'>Subscribe</Button>
      </form>
    </div>
  );
};

export default EmailCapture;
