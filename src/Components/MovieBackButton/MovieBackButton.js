import React from 'react';
import './MovieBackButton.scss';
const MovieBackButton = ({ handleGoBack }) => (
  <button className="BackButton" type="button" onClick={handleGoBack}>
    Back
  </button>
);
export default MovieBackButton;
