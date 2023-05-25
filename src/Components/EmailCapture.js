import React from 'react';
import { Button } from './Button';
import './EmailCapture.css'

const EmailCapture = () => {
  return (
    <div className='email-container'>
      {/* <h2>Newsletter</h2> */}
      <p>
        Rise to your creative potential - Receive weekly inspiration with your
        free newsletter subscription!
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
