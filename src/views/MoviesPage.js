import React, { Component } from 'react';
import Error from '../Components/Error/Error';
import Loader from '../Components/Loader/Loader';
import Button from '../Components/LoadMoreBtn/Button';
import MoviesList from '../Components/MoviesList/MoviesList';
import { fetchMoviesPage } from '../services/fetchFilms';
import '../styles/search.scss';

class MoviesPage extends Component {
  state = {
    inputValue: '',
    films: [],
    currentPage: 1,
    searchMovie: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const getFilm = localStorage.getItem('film');
    if (getFilm) {
      this.setState({ searchMovie: getFilm });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchMovie } = this.state;
    if (prevState.searchMovie !== searchMovie) {
      this.fetchMovies();
    }
    localStorage.setItem('film', searchMovie);
  }

  onChangeValue = value => {
    this.setState({ searchMovie: value });
  };

  fetchMovies = () => {
    const { currentPage, searchMovie } = this.state;
    const options = {
      currentPage,
      searchMovie,
    };

    this.setState({ isLoading: true });

    fetchMoviesPage(options)
      .then(results =>
        this.setState(prevState => ({
          films: [...prevState.films, ...results],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handelInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.onChangeValue(this.state.inputValue);
    if (this.state.inputValue !== this.state.searchMovie) {
      this.reset();
    }
  };

  reset = () => {
    this.setState({ inputValue: '', currentPage: 1, films: [] });
  };

  render() {
    const { inputValue, isLoading, error, films } = this.state;
    const shouldRenderLoadMoreBtn = films.length > 0 && !isLoading;
    return (
      <>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={inputValue}
            onChange={this.handelInputChange}
            className="SearchForm__input"
          />
          <button type="submit" className="SearchForm__button">
            <span className="SearchForm__button--label">Search</span>
          </button>
        </form>

        {error ? (
          <Error text={error} />
        ) : (
          <>
            <MoviesList films={films} />
            {shouldRenderLoadMoreBtn && <Button onClick={this.fetchMovies} />}
          </>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default MoviesPage;
