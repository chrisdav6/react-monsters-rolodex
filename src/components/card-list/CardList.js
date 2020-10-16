import React from 'react';
import Card from '../card/Card';

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((monster, idx) => (
        <Card key={idx} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
