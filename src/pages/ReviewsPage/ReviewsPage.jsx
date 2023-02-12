import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';
import { getReviews } from 'shared/services/api';
import css from "./ReviewsPage.module.css"

const ReviewsPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getReviews(movieId);
        console.log(results, 'result');

        setMovies(results);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const element = movies.map(({ content, id }) => (
    <li key={id} className={css.item}>

      <p>{content}</p>
    </li>
  ));

    return (<>
      {loading && <Loader/>}
    <div className={css.wrapper}>
      <ul className={css.list}>{element}</ul>
        </div>
    </>
  );
};

export default ReviewsPage;