import { getMovieReviews } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsBox, ReviewsTitle, ReviewsDescription } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (movieReviews && movieReviews.length > 0) {
    return movieReviews.map(({ author, content, id }) => (
      <ReviewsBox key={id}>
        <ReviewsTitle>{author}</ReviewsTitle>
        <ReviewsDescription>{content}</ReviewsDescription>
      </ReviewsBox>
    ));
  }

  return <ReviewsTitle>No reviews here!</ReviewsTitle>;
};

export default Reviews;
