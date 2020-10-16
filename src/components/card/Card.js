import React from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
  return (
    <div className='Card'>
      <img
        src={`http://robohash.org/${monster.id}?set=set2`}
        alt={monster.id}
      />
    </div>
  );
};

export default Card;
