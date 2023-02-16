import PropTypes from 'prop-types';
import { memo } from 'react';

import { Link, useLocation } from 'react-router-dom';

import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location, "MoviesList" )

  const elements = movies.map(({ title, id }) => (
    <li key={id} className={css.item}>
      <Link
        className={css.link}
        state={{ from: location }}
        to={`/movies/${id}`}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default memo(MoviesList);

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
