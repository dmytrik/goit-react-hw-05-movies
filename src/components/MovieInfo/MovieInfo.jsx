import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieById } from 'api';
import {
  Img,
  ImgBox,
  MovieTitle,
  TextInfo,
  MovieDescriptionTitle,
  MoviePrimaryBox,
  MovieDescriptionBox,
  BackBtn,
  MovieAdditionalBox,
} from './MovieInfo.styled';

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const nav = useRef(location);
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);
  if (movie) {
    const { poster_path, title, release_date, popularity, overview, genres } =
      movie;
    const normGenres = genres.map(({ name }) => name).join(' ');
    return (
      <>
        <BackBtn to={nav.current.state.from}>Back</BackBtn>
        <MoviePrimaryBox>
          <ImgBox>
            <Img src={IMG_REGUEST + poster_path} alt={title} />
          </ImgBox>
          <MovieDescriptionBox>
            <MovieTitle>
              {title} ({release_date.slice(0, 4)})
            </MovieTitle>
            <TextInfo>User Score : {Math.round(Number(popularity))}%</TextInfo>
            <MovieDescriptionTitle>Overview</MovieDescriptionTitle>
            <TextInfo>{overview}</TextInfo>
            <MovieDescriptionTitle>Genres</MovieDescriptionTitle>
            <TextInfo>{normGenres}</TextInfo>
          </MovieDescriptionBox>
        </MoviePrimaryBox>
        <MovieAdditionalBox>
          <NavLink to={'cast'}>Cast</NavLink>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </MovieAdditionalBox>
        <Outlet />
      </>
    );
  }

  return <div>Упс, щось пішло не так</div>;
};
