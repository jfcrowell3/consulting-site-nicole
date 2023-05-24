import React from 'react';
import './Cards.css';

function Cards(props) {

  return (
    <div className='cards'>
      <img src={props.url} alt={props.title} />
    </div>
  );
}

export default Cards;
