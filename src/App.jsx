import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
