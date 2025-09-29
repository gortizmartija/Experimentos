import { useState, useCallback } from 'react';
import './App.css';
import { Movies } from './components';
import { useMovies, useSearch } from './hooks';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div id='page'>
      <header>
        <h1>Movie Browser</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div>
            <input
              onChange={handleChange}
              value={search}
              type='text'
              placeholder='Avengers, Star Wars, Avatar...'
            />
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          </div>
          <input type='checkbox' onChange={handleSort} checked={sort} />

          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
