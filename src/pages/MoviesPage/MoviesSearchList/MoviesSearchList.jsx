import { Link } from 'react-router-dom';
import css from './MoviesSearchList.module.css';

const MoviesSearchList = ({ movies }) => {
  const elements = movies.map(({ title, id }) => (
    <li key={id} className={css.item}>
      <Link className={css.link} to={`/movies/${id}`}> {title}</Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MoviesSearchList;

MoviesSearchList.defaultProps = {
  movies: [],
};
