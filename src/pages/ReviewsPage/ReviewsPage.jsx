import { useState, useEffect,memo } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'shared/components/Loader/Loader';
import { getReviews } from 'shared/services/api';
import css from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getReviews(movieId);
        // console.log(results);
        if (results.length === 0) {
          toast.info('🦄 Sorry, reviews not found');
        }

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

  const element = movies.map(({ content, id, author }) => (
    <li key={id} className={css.item}>
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movies.length > 0 && (
        <div className={css.wrapper}>
          <ul className={css.list}>{element}</ul>
        </div>
      )}
    </>
  );
};

export default memo(ReviewsPage);
