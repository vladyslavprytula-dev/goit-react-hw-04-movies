import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import MovieBackButton from '../Components/MovieBackButton/MovieBackButton';
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
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location.state.from || routes.home);
  };
  render() {
    const { film, isLoading, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {isLoading && <Loader />}
        {error && <Error text={error} />}
        {film ? (
          <>
            <MovieBackButton handleGoBack={this.handleGoBack} />
            <MovieDetails film={film} />
            <MovieNav filmId={film.id} />
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </>
        ) : (
          ''
        )}
      </>
    );
  }
}
