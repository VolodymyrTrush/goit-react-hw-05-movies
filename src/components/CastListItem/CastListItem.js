import React from 'react';
import PropTypes from 'prop-types';
import { CastItem } from './CastListItem.styled';

const CastListItem = ({ data }) => {
  const { profile_path, character, name } = data;

  return (
    <CastItem>
      {profile_path && (
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
      )}
      <p>{name}</p>
      <p>Character:{character}</p>
    </CastItem>
  );
};

CastListItem.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default CastListItem;
