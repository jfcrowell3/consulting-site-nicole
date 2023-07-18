import React from 'react';
import { BrandImages, responsive } from './BrandImages';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards';
import './Brands.css';

const Brands = ({ deviceType }) => {
  const brand = BrandImages.map((item) => (
    <Cards url={item.url} title={item.title} key={item.key} />
  ));

  return (
    <div className='brand-container'>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={2000}
        // keyBoardControl={true}
        // // customTransition='all .5'
        // transitionDuration={800}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        // deviceType={deviceType}
        // dotListClass='custom-dot-list-style'
        // itemClass='carousel-item-padding-40-px'
      >
        {brand}
      </Carousel>
    </div>
  );
};

export default Brands;
