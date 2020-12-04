import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieNav.scss';
const MovieNav = ({ filmId }) => {
  return (
    <>
      <ul className="Information">
        <li className="Information__link" activeclassname="Information__active">
          <NavLink to={`/movie/${filmId}/cast`}>Cast</NavLink>
        </li>
        <li className="Information__link" activeclassname="Information__active">
          <NavLink to={`/movie/${filmId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};
export default MovieNav;
