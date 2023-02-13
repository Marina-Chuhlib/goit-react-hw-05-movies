import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Loader from 'shared/components/Loader/Loader';
import Layout from 'modules/Layout/Layout';

// const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route path="movies" element={<MoviePage />}>
                <Route  path="movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<CastPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Route>
              </Route>

            </Route>

            {/* <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </>
  );
};
