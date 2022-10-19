import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { MoviesList } from './MoviesList/MoviesList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<MoviesList />}>
            <Route path=":id" element={<MovieInfo />} />
          </Route>
          <Route path="movies" element={<div>пошук</div>} />
        </Route>
      </Routes>
    </>
  );
};
