import { useState } from 'react';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(...search);
    setSearch('');
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        required
        placeholder="Enter movie"
        className={css.input}
        onChange={handleChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
