import { Outlet, useLocation, useParams } from 'react-router-dom';
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
  MovieInfoLink,
} from './MovieInfo.styled';

const MovieInfo = () => {
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
    const backLink = nav.current.state?.from ?? '/movies';
    return (
      <>
        <BackBtn to={backLink}>Back</BackBtn>
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
          <MovieInfoLink to={'cast'}>Cast</MovieInfoLink>
          <MovieInfoLink to={'reviews'}>Reviews</MovieInfoLink>
        </MovieAdditionalBox>
        <Outlet />
      </>
    );
  }

  return;
};

export default MovieInfo;
