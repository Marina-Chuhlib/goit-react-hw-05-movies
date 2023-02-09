import React, { useState, useEffect } from 'react';

import css from './MoviesSearch.module.css';

import MovieList from './MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import filmSearch from '../../shared/services/api';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading({ loading: true });
        const results = await filmSearch();
        console.log(results);

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies, setLoading]);

  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesSearch;
