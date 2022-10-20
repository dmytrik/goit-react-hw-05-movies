import { Routes, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import { Layout } from './Layout/Layout';
import { MovieInfo } from './MovieInfo/MovieInfo';
import Movies from './Movies/Movies';
import { MoviesList } from './MoviesList/MoviesList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
