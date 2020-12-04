import React from 'react';
import defaultImag from '../../img/unnamed.png';
import './MovieDetails.scss';
const MovieDetails = ({ film }) => {
  let RealeseYear = null;
  if (film.release_date) {
    RealeseYear = new Date(film.release_date).getFullYear();
  }
  return (
    <>
      <div className="Movie__info">
        <div className="Movie__image">
          {film.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              alt={film.original_title}
            />
          ) : (
            <img src={defaultImag} alt={film.original_title} width="200" />
          )}
        </div>
        <div className="Movie__details">
          <h2 className="Movie__title">
            {film.original_title} ({RealeseYear})
          </h2>
          <p className="Movie__score">
            {`Raiting: ${film.vote_average}`}
            <span className="Movie__score--count">{` (${film.vote_count} votes)`}</span>
          </p>
          <h3>Overview</h3>
          <p className="Movie__overview">{film.overview}</p>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
