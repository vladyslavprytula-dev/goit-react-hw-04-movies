import React from 'react';
import defaultImg from '../../img/unnamed.png';
import './CastList.scss';
const CastList = ({ casts }) => {
  return (
    <ul className="Cast__list">
      {casts.map(cast => (
        <li key={cast.id}>
          <div className="Image">
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt={cast.name}
                width="200"
                className="Cast__images"
              />
            ) : (
              <img
                src={defaultImg}
                alt={cast.name}
                width="200"
                className="Cast__images"
              />
            )}
          </div>
          <p className="Cast__name">{cast.name}</p>
          <p className="Cast__character">Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
