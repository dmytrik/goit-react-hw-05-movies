import { getMovieCast } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItem,
  CastImgBox,
  CastImg,
  CastDescription,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    getMovieCast(movieId).then(setMovieCast);
  }, [movieId]);
  if (movieCast && movieCast.length > 0) {
    return (
      <CastList>
        {movieCast.map(({ cast_id, profile_path, name, character }) => {
          return (
            <CastItem key={cast_id}>
              <CastImgBox>
                <CastImg src={IMG_REGUEST + profile_path} alt={name} />
              </CastImgBox>
              <CastDescription>{name}</CastDescription>
              <CastDescription>{character}</CastDescription>
            </CastItem>
          );
        })}
      </CastList>
    );
  }
  return <h3>No customers here!</h3>;
};

export default Cast;
