// import PropTypes from 'prop-types';

import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const elements = movies.map(({ original_title = 'name', id }) => (
    <li key={id} className={css.item}>
      {original_title}
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
