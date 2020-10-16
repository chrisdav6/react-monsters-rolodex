import React from 'react';
import Card from '../card/Card';
import './cardList.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className='CardList'>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
