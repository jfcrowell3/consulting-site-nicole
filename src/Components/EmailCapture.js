import React, { useEffect, useState } from 'react';
import './EmailCapture.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <form className='mc__form' onSubmit={(e) => handleSubmit(e)}>
      <h3 className='mc__title'>
        {status === 'success'
          ? 'Success!'
          : 'Rise to your creative potential - Receive weekly inspiration with your free newsletter subscription!'}
      </h3>

      {status === 'sending' && (
        <div className='mc__alert mc__alert--sending'>Sending...</div>
      )}
      {status === 'error' && (
        <div
          className='mc__alert mc__alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className='mc__alert mc__alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div className='mc__field-container'>
          <input
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            value={email}
            placeholder='Your E-mail'
            isRequired
          />
          <button label='subscribe' type='submit' formValues={[email]}>Subscribe</button>
        </div>
      ) : null}
    </form>
  );
};

const EmailCapture = (props) => {
  const postUrl = `https://performancepurple.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className='email-container'>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <div className='email-wrapper'>
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </div>
        )}
      />
    </div>
  );
};

export default EmailCapture;
