import React from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
  return (
    <div className='Card'>
      <img
        src={`http://robohash.org/${monster.id}?set=set2`}
        alt={monster.id}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
