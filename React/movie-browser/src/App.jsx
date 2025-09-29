import './App.css';
import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div id='page'>
      <header>
        <h1>Movie Browser</h1>
        <form action='' className='form'>
          <label>
            <strong>Search movie:</strong>
            <input type='text' placeholder='Avengers, Star Wars, Avatar...' />
          </label>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <h3>{movie.Year}</h3>
                <img
                  src={movie.Poster}
                  alt={`Poster of the film ${movie.Title}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay resultados...</p>
        )}
      </main>
    </div>
  );
}

export default App;
