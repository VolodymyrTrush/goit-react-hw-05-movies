import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'services/api';
import CastListItem from 'components/CastListItem';
import { CastList, StyledErrorMessage } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getFilmCast(movieId).then(res => {
      if (Array.isArray(res)) {
        setCast(res);
      }
    });
  }, [movieId]);

  return (
    <div>
      {cast ? (
        <CastList>
          {cast.map(el => {
            return <CastListItem key={el.id} data={el} />;
          })}
        </CastList>
      ) : (
        <StyledErrorMessage>
          Sorry, we don't have information
        </StyledErrorMessage>
      )}
    </div>
  );
};

export default Cast;
