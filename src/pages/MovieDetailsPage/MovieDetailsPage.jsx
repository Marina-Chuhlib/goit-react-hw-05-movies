import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../../shared/services/api';
import Loader from '../../shared/components/Loader/Loader';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getMovieDetails(movieId);
        // console.log(results);

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

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  const year = new Date(date).getFullYear();

  const { poster_path, original_title, vote_average, overview } = movie;
  

  return (
    <>
      {loading && <Loader />}
     <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title ? original_title : 'picture not found'}
          loading="lazy"
          className={css.img}
          width="300px"
          height="450px"
        />
        <div className={css.info}>
          <h2 className={css.title}>
            {original_title ? original_title : 'Movie not found'}
            <span>({year ? year : '-'})</span>
          </h2>
          <p>
            User score:{' '}
            {vote_average ? ((vote_average / 10) * 100).toFixed(0) : 0}%
          </p>
          <h3 className={css.topic}>Genres</h3>
          <ul className={css.list}>{elements}</ul>
          <h3 className={css.topic}>Overview</h3>
          <p>{overview}</p>
        </div>
      </div> 
    </>
  );
};
export default MovieDetailsPage;