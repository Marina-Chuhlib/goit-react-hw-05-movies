import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/services/api';
import Loader from 'shared/components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './CastPage.module.css';

const CastPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getMovieCast(movieId);

        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`🦄 Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const element = movies.map(({ original_name, profile_path, id }) => (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
        alt={original_name}
        loading="lazy"
        className={css.img}
        width="100px"
        height="150px"
      />
      <h3>{original_name}</h3>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movies && (
        <div>
          <ul className={css.list}>{element}</ul>
        </div>
      )}
    </>
  );
};

export default CastPage;
