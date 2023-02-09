import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviesPage/MoviesPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
