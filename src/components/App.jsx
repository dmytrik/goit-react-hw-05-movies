import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Reviews from './Reviews/Reviews';

const MoviesList = lazy(() => import('./MoviesList/MoviesList'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
};
