import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';
import defaultImag from '../../img/unnamed.png';
const MovieDetails = ({
  release_date,
  original_title,
  vote_average,
  vote_count,
  overview,
  poster_path,
}) => {
  let realeseYear = null;
  if (release_date) {
    realeseYear = new Date(release_date).getFullYear();
  }
  return (
    <div className="Movie__info">
      <div className="Movie__image">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={original_title}
          />
        ) : (
          <img src={defaultImag} alt={original_title} width="200" />
        )}
      </div>
      <div className="Movie__details">
        <h2 className="Movie__title">
          {original_title} ({realeseYear})
        </h2>
        <p className="Movie__score">
          {`Raiting: ${vote_average}`}
          <span className="Movie__score--count">{` (${vote_count} votes)`}</span>
        </p>
        <h3>Overview</h3>
        <p className="Movie__overview">{overview}</p>
      </div>
    </div>
  );
};
MovieDetails.protoTypes = {
  release_date: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};
export default MovieDetails;
