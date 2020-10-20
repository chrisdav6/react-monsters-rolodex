import React from 'react';
import './card.styles.css';
import { motion } from 'framer-motion';

const Card = ({ monster }) => {
  return (
    <motion.div
      className='Card'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <img
        src={`http://robohash.org/${monster.id}?set=set2`}
        alt={monster.id}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </motion.div>
  );
};

export default Card;
