import React from 'react';
import Card from '../card/Card';
import './cardList.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className='CardList'>
      {monsters.map((monster, idx) => (
        <Card key={idx} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
