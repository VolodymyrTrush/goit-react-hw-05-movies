import { useEffect, useState } from 'react';
import * as Api from '../../api/movies-api';
import {Profile, Person} from './Cast.styled';
import PropTypes from 'prop-types';


export const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    Api.fetchMovieCast(id).then(setCast);
  }, [id]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <Person>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                  />
                )}
                <Profile>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </Profile>
              </Person>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.string.isRequired,
}