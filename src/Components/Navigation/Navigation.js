import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';
const Navigation = () => {
  return (
    <nav className="nav nav-pills">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeclassname="NavLink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className="NavLink"
        activeclassname="NavLink--active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
