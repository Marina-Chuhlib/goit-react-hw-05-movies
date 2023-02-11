import { useState, useEffect } from 'react';

import MovieSearchForm from '../../modules/MovieSearchForm/MovieSearchForm';
import {MovieSearch} from "../../shared/services/api"
// import css from './MoviePage.module.css';

const MoviePage = () => {
  const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    
  const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!search) {
            return
        }

        const fetchMovie = async () => {
            try {
             const results = await MovieSearch(search);
            } catch (error){
                
            }
            finally {
                
            }
            
        }


    },[search])
    
    
  const chanceSearch = ({ search }) => {
    setSearch(search);
  };

  return <MovieSearchForm onSubmit={chanceSearch} />;
};

export default MoviePage;
