import React, { Component } from 'react';
import MoviesList from '../Components/MoviesList/MoviesList';
import { fetchTrendingFilms } from '../Services/FetchFilms';

export default class HomePage extends Component {
  state = {
    films: [],
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    localStorage.removeItem('film');
    this.setState({ isLoading: true });
    fetchTrendingFilms()
      .then(hits => {
        this.setState({
          films: [...hits],
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <MoviesList films={films} />
      </>
    );
  }
}
