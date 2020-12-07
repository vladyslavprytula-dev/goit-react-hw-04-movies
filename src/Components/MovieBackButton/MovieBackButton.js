import React from 'react';
import PropTypes from 'prop-types';
import './MovieBackButton.scss';
const MovieBackButton = ({ handleGoBack }) => (
  <button className="BackButton" type="button" onClick={handleGoBack}>
    Back
  </button>
);
MovieBackButton.protoTypes = {
  handleGoBack: PropTypes.func.isRequired,
};
export default MovieBackButton;
