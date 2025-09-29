//import withResults from '@/mocks/with-results.json';
//import withoutResults from '@/mocks/no-results.json';
import { useState, useRef, useMemo, useCallback } from 'react';
import { searchMovies } from '@/services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const previousRef = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (previousRef.current === search) return;

    previousRef.current = search;
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  }, []);

  const sortedMovies = useMemo(() => {
    if (!movies) return;
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies };
}
