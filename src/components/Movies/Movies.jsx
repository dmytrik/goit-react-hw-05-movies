import Search from 'components/Search/Search';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByWord } from 'api';
import { MoviesContainer, MoviesItem } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');
  const location = useLocation();

  useEffect(() => {
    if (!searchWord) {
      return;
    }
    getMoviesByWord(searchWord).then(setMovies);
  }, [searchWord]);

  const onSearchMovies = e => {
    e.preventDefault();
    setSearchParams({ searchWord: e.target.search.value });
  };

  return (
    <>
      <Search submit={onSearchMovies} />
      {movies && (
        <MoviesContainer>
          {movies.map(({ title, id }) => (
            <MoviesItem key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </MoviesItem>
          ))}
        </MoviesContainer>
      )}
    </>
  );
};

export default Movies;
