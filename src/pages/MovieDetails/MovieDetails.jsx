import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../../shared/services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading({ loading: true });
        const results = await getMovieDetails(movieId);
        console.log(results, '===== results');

        setMovie(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId,loading, setMovie, setLoading]);

  return (
    <div>
      <h2>{movie.original_title}</h2>
      <img src="https://image.tmdb.org/t/p/w300/{movie.poster_path}" alt="" />
      <p>{movie.overview}</p>
    </div>
  );
};
export default MovieDetails;
