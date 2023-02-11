import React, { useState, useEffect } from 'react';

import css from './TrendingMovies.module.css';

import MovieList from './MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import {filmsSearch} from '../../shared/services/api';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const results = await filmsSearch();
        // console.log(results);

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

export default TrendingMovies;
