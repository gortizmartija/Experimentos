function MoviesList({ movieslist }) {
  return (
    <ul className='movies'>
      {movieslist.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <h3>{movie.year}</h3>
          <img src={movie.poster} alt={`Poster of the film ${movie.title}`} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No hay resultados...</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <MoviesList movieslist={movies} /> : <NoMovies />;
}
