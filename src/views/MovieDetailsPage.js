import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieDetails from '../Components/MovieDetails/MovieDetails';
import MovieNav from '../Components/MovieNav/MovieNav';
import { fetchMovieDetails } from '../Services/FetchFilms';
import Cast from './Cast';
import Reviews from './Reviews';
import Loader from '../Components/Loader/Loader';
import Error from '../Components/Error/Error';

export default class MovieDetailsPage extends Component {
  state = {
    film: null,
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetchMovieDetails(this.props.match.params.movieId)
      .then(hits => {
        this.setState({
          film: hits,
        });
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { film, isLoading, error } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {error && <Error text={error} />}
        {film ? (
          <>
            <MovieDetails film={film} />
            <MovieNav filmId={film.id} />
            <Route path={`${this.props.match.path}/cast`} component={Cast} />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={Reviews}
            />
          </>
        ) : (
          ''
        )}
      </>
    );
  }
}
