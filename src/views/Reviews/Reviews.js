import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'service/api';
import { ReviewsList, ReviewsAuthor, ReviewsText } from './Reviews.styled';
import { StyledErrorMessage } from 'views/Cast/Cast.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFilmReviews(movieId).then(res => {
      if (Array.isArray(res)) {
        setReviews(res);
      }
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewsAuthor>Author: {author}</ReviewsAuthor>
                <ReviewsText>{content}</ReviewsText>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <StyledErrorMessage>
          Sorry, we don't have information
        </StyledErrorMessage>
      )}
    </div>
  );
};

export default Reviews;
