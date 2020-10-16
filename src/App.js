import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import './components/search-bar/SearchBar';
import axios from 'axios';
import SearchBar from './components/search-bar/SearchBar';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const makeRequest = async () => {
      let url = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(url);
      setMonsters(response.data);
    };

    makeRequest();
  }, []);

  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchField(value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <SearchBar
        searchField={searchField}
        handleSearchChange={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
