import React from 'react';
import './searchBar.styles.css';

const SearchBar = ({ searchField, handleSearchChange }) => {
  return (
    <div className='SearchBar'>
      <input
        type='text'
        placeholder='Search Monsters!'
        value={searchField}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
