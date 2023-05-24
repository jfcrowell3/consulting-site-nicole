import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me__container' id='about-me' name='about-me'>
      <div className='about-me__wrapper'>
        <h2 className='about-me__headline'>About Me</h2>
        <p className='about-me__body'>
          For over 5 years I've been helping DTC brands & agencies make more
          money with performace-focused creative strategy & operations.
        </p>
      </div>
      <div className='about-me__img-container'>
        <img src='/images/headshot-black.png' alt='Nicole Crowell Headshot' />
      </div>
    </section>
  );
};

export default AboutMe;
