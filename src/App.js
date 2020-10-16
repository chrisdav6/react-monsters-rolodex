import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import axios from 'axios';

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      let url = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(url);
      setMonsters(response.data);
    };

    makeRequest();
  }, []);

  return (
    <div className='App'>
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
