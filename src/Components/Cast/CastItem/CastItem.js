import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../../img/unnamed.png';
const CastItem = ({ profile_path, name, character }) => {
  return (
    <li>
      <div className="Image">
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt={name}
            width="200"
            className="Cast__images"
          />
        ) : (
          <img
            src={defaultImg}
            alt={name}
            width="200"
            className="Cast__images"
          />
        )}
      </div>
      <p className="Cast__name">{name}</p>
      <p className="Cast__character">Character: {character}</p>
    </li>
  );
};
CastItem.protoTypes = {
  poster_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
export default CastItem;
