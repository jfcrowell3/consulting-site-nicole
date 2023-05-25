import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me__container' id='about-me' name='about-me'>
      <div className='about-me__wrapper'>
        <h2 className='about-me__headline'>
          Get to Know the Captain Behind the Ship
        </h2>
        <p className='about-me__body'>
          Meet Nicole Crowell, your very own "Marketing Sorceress" who's spent
          the last 5 years swimming, snorkeling, and occasionally cannonballing
          into the deep end of the performance marketing pool.
        </p>
        <p>
          She's sharpened her media buying wands with everything from duct-taped
          bootstrap brands to the intimidatingly shiny 9-figure big guns.
          Finally deciding to hang her own shingle, she launched **Performance
          Purple** - a place where she consults, manages, and imparts the mystic
          arts of Creative Strategy.
        </p>
        <p>
          Today, she's a trusted ally to over 50+ D2C brands. She's their ace up
          the sleeve in the world of paid media and creative strategy,
          masterfully handling a jaw-dropping total of $70MM+ in ad spend across
          Meta, Google, and Tiktok. We've checked - that's enough to buy a small
          island!
        </p>
        <p>
          But Nicole's mission isn't to buy islands. It's all about alchemy -
          transforming value into even more value. She's fiercely passionate
          about helping people level up, whether it's turning leaden marketing
          strategies into golden success stories or helping the little guy punch
          above their weight class.
        </p>
        <p>
          So, are you ready to let Nicole wave her magic wand over your brand?
          The results might just leave you spellbound!For over 5 years I've been
          helping DTC brands & agencies make more money with performace-focused
          creative strategy & operations.
        </p>
      </div>
      <div className='about-me__img-container'>
        <img src='/images/headshot-black.png' alt='Nicole Crowell Headshot' />
      </div>
    </section>
  );
};

export default AboutMe;
