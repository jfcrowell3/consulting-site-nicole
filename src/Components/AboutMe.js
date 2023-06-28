import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me__container' id='about-me' name='about-me'>
      <div className='about-me__wrapper'>
        <h2 className='about-me__headline'>Who Is Nicole Crowell?</h2>
        <p className='about-me__body'>
          Nicole Crowell has spent the last 5 years immersed in the performance
          marketing world. After working with both bootstrap brands and 9-figure
          brands as a media buyer, she has quickly found her groove in launching
          her own business, Performance Purple, where she consults, manages, and
          teaches Creative Strategy.
        </p>
        <p>
          Now, she has worked with over 50+ D2C brands focused on paid media and
          creative strategy with over $70MM+ in ad spend across Meta, Google &
          Tiktok.
        </p>
        <p>
          Her top priority is to provide value to others. She is passionate
          about helping people improve and level up in all aspects of life.
        </p>
      </div>
      <div className='about-me__img-container'>
        <img src='/images/headshot-black.png' alt='Nicole Crowell Headshot' />
      </div>
    </section>
  );
};

export default AboutMe;
