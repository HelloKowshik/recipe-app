import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = '49b384e5';
  const APP_KEY = 'f3487635d6b44059c4eebb1b30f25e76';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div className='App'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='food-name'
          value={search}
          onChange={handleChange}
          placeholder='Search By Recipe Name'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
