import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from '../../modules/MovieSearchForm/MovieSearchForm';
import { MovieSearch } from '../../shared/services/api';
import Loader from '../../shared/components/Loader/Loader';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
// import css from './MoviePage.module.css';

const MoviePage = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading({ loading: true });
        const results = await MovieSearch(query);

        setMovie(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const chanceSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <MovieSearchForm onSubmit={chanceSearch} />
      {loading && <Loader />}
      {movies.length > 0 && <MoviesSearchList movies={movies} />}
    </>
  );
};

export default MoviePage;
