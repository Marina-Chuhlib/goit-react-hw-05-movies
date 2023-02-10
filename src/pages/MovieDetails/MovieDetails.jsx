import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../../shared/services/api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading({loading: true});
        const results = await getMovieDetails(movieId);
        // console.log(results)
        setMovie(results);

        setGenres(results.genres);

        setDate(results.release_date);
      } catch (error) {
        console.log(error.message);
      } finally {
      
        setLoading(false);
       
      }
    };
    fetchMovie();
  }, [movieId, setMovie, setLoading]);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  const year = new Date(date).getFullYear();

  const { poster_path, original_title, popularity, overview } = movie
  
  return (
    <div className={css.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={original_title}
        loading="lazy"
        className={css.img}
      />
      <div className={css.info}>
        <h2 className={css.title}>
          {original_title} <span>({year})</span>{' '}
        </h2>
        <p>{popularity}</p>
        <h3 className={css.topic}>Genres</h3>
        <ul className={css.list}>{elements}</ul>
        <h3 className={css.topic}>Overview</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};
export default MovieDetails;
