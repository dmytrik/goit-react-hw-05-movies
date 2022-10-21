import { useState, useEffect } from 'react';
import { getPopularMovie } from 'api';
import { NavLink, useLocation } from 'react-router-dom';
import { MoviesContainer, MoviesItem, MoviesBox } from './MoviesList.styled';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularMovie().then(setMovies);
  }, []);

  if (!movies) {
    return <MoviesBox>Oops, movies not found</MoviesBox>;
  }
  return (
    <>
      <MoviesContainer>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.name || movie.title}
            </NavLink>
          </MoviesItem>
        ))}
      </MoviesContainer>
    </>
  );
};
export default MoviesList;
