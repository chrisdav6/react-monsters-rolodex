import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar/SearchBar';
import CardList from './card-list/CardList';
import axios from 'axios';
import './app.styles.css';

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
      <h1>Monsters Rolodex</h1>
      <SearchBar
        searchField={searchField}
        handleSearchChange={handleSearchChange}
        placeholder='Search Monsters!'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
