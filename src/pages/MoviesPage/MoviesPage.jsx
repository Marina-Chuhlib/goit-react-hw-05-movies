import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from '../../modules/MovieSearchForm/MovieSearchForm';
import { MovieSearch } from '../../shared/services/api';
// import css from './MoviePage.module.css';

const MoviePage = () => {
  // const [search, setSearch] = useState('');
  // const [movies, setMovie] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);

  useEffect(() => {
    
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      try {
        // setLoading({ loading: true });
        const results = await MovieSearch(query);
        console.log(results);
        // setMovie(results);
       
      } catch (error) {
        console.log(error.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const chanceSearch = ({ query }) => {
    setSearchParams(query);
    console.log(query);
  };

  return <MovieSearchForm onSubmit={chanceSearch} />;
};

export default MoviePage;
