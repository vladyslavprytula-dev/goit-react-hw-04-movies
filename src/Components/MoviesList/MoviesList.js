import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import './MovieList.scss';
const MoviesList = ({ films, location }) => {
  return (
    <ul className="Films__list">
      {films.map(film => (
        <li key={film.id} className="Films__item">
          <NavLink
            to={{ pathname: `/movie/${film.id}`, state: { from: location } }}
          >
            <MoviePreview
              poster_path={film.poster_path}
              original_title={film.original_title}
              name={film.name}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);
