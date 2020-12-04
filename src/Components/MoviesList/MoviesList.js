import React from 'react';
import { NavLink } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import './MovieList.scss';
// import routes from '../../routes'
const MoviesList = ({ films }) => {
  return (
    <ul className="Films__list">
      {films.map(film => (
        <li key={film.id} className="Films__item">
          <NavLink to={`/movie/${film.id}`}>
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
export default MoviesList;
