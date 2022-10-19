import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'api';

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);
  if (movie) {
    const { poster_path, title } = movie;
    return (
      <div>
        <img src={IMG_REGUEST + poster_path} alt={title} />
      </div>
    );
  }

  return <div>Упс, щось пішло не так</div>;
};
