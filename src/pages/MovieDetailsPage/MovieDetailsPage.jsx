import PropTypes from 'prop-types';

import { useState, useEffect, useMemo } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from '../../shared/services/api';
import Loader from '../../shared/components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './MovieDetailsPage.module.css';

import { MdKeyboardBackspace } from 'react-icons/md';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');

  const { movieId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/movies';
  // console.log(location)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getMovieDetails(movieId);

        setMovie(results);

        setGenres(results.genres);

        setDate(results.release_date);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`🦄 Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, setMovie, setLoading]);

  const goBack = () => navigate(from);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  const year = useMemo(()=>new Date(date).getFullYear(),[date]) ;

  return (
    <>
      <button type="button" onClick={goBack} className={css.button}>
        <MdKeyboardBackspace className={css.icon} /> Go back
      </button>
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movie && (
        <div className={css.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
            loading="lazy"
            className={css.img}
            width="300px"
            height="450px"
          />
          <div className={css.info}>
            <h2 className={css.title}>
              {movie.original_title}
              <span> ({year})</span>
            </h2>
            <p>User score: {((movie.vote_average / 10) * 100).toFixed(0)}%</p>
            <h3 className={css.topic}>Genres</h3>
            <ul className={css.list}>{elements}</ul>
            <h3 className={css.topic}>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <div className={css.wrapperLink}>
        <button type="button" className={css.buttonLink}>
          {' '}
          <Link
            state={{ from }}
            to={`/movies/${movieId}/cast`}
            className={css.link}
          >
            Cast
          </Link>
        </button>
        <button type="button" className={css.buttonLink}>
          <Link
            state={{ from }}
            to={`/movies/${movieId}/reviews`}
            className={css.link}
          >
            Reviews
          </Link>
        </button>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string,
};
