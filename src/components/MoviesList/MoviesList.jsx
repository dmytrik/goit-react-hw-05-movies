import { useState, useEffect } from 'react';
import { getPopularMovie } from 'api';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(setMovies);
  }, []);

  if (!movies) {
    return <div>Oops, movies not found</div>;
  }
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`${movie.id}`}>{movie.name || movie.title}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
