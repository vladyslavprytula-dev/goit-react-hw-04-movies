import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../img/unnamed.png';
import './MoviePreview.scss';

const MoviePreview = ({ poster_path, original_title, name }) => {
  return (
    <div className="Films">
      <div className="FilmsPreview-thumb">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={original_title}
            className="card-img-top"
          />
        ) : (
          <img src={defaultImg} alt={original_title} className="card-img-top" />
        )}
      </div>
      <div className="Films__box">
        <h3 className="Films__title">{original_title || name}</h3>
      </div>
    </div>
  );
};

MoviePreview.defaultProps = {
  poster_path: '',
  original_title: '',
  name: '',
};

MoviePreview.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  name: PropTypes.string,
};

export default MoviePreview;
