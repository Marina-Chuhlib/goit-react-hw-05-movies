import React, { useState, useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MoviesList from '../MoviesList/MoviesList';
import Loader from 'shared/components/Loader/Loader';
import { filmsSearch } from '../../shared/services/api';

import css from './TrendingMovies.module.css';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const results = await filmsSearch();
        // console.log(results);

        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`🦄 Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies, setLoading]);

  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default TrendingMovies;
