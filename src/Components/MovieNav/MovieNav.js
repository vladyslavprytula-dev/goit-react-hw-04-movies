import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './MovieNav.scss';
const MovieNav = ({ filmId, location }) => {
  return (
    <>
      <ul className="Information">
        <li className="Information__link" activeclassname="Information__active">
          <NavLink
            to={{
              pathname: `/movie/${filmId}/cast`,
              state: location.state,
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className="Information__link" activeclassname="Information__active">
          <NavLink
            to={{
              pathname: `/movie/${filmId}/reviews`,
              state: location.state,
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default withRouter(MovieNav);
