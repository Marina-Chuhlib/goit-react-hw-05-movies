import TrendingMovies from '../../modules/TrendingMovies/TrendingMovies';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <TrendingMovies />
    </>
  );
};

export default HomePage;
