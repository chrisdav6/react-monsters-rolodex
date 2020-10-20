import React from 'react';
import './searchBar.styles.css';

const SearchBar = ({ searchField, handleSearchChange, placeholder }) => {
  return (
    <div className='SearchBar'>
      <input
        type='search'
        value={searchField}
        onChange={handleSearchChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
