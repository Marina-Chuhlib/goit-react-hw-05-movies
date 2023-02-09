// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const elements = movies.map(({ original_title, id, name }) => (
    <li key={id} className={css.item}>
      <Link className={css.link} to={`/movies/${id}`}>
        {original_title ? original_title : name}
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  movies: [],
};

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       original_title: PropTypes.string.isRequired,
//     })
//   ),
// };
