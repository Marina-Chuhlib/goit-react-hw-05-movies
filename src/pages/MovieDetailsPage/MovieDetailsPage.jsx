import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet} from 'react-router-dom';

import { getMovieDetails } from '../../shared/services/api';
import Loader from '../../shared/components/Loader/Loader';

import css from './MovieDetailsPage.module.css';

import { MdKeyboardBackspace } from 'react-icons/md';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getMovieDetails(movieId);

        setMovie(results);

        setGenres(results.genres);

        setDate(results.release_date);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, setMovie, setLoading]);

  const goBack = () => navigate(-1);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  const year = new Date(date).getFullYear();

  return (
    <>
      <button type="button" onClick={goBack} className={css.button}>
        <MdKeyboardBackspace className={css.icon} /> Go back
      </button>
      {loading && <Loader />}
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
        <button type='button' className={css.buttonLink}>  <Link to={`/movies/${movieId}/cast`} className={css.link}>
        Cast
      </Link></button>
      <button type='button' className={css.buttonLink}><Link to={`/movies/${movieId}/reviews`} className={css.link}>
        Reviews
        </Link>
        </button>
        </div>
     
      <Outlet/>
    </>
  );
};
export default MovieDetailsPage;
