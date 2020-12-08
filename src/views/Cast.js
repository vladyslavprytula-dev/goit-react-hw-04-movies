import React, { Component } from 'react';
import CastList from '../Components/Cast/CastList';
import Error from '../Components/Error/Error';
import Loader from '../Components/Loader/Loader';
import { fetchCastList } from '../services/fetchFilms';

export default class Cast extends Component {
  state = {
    casts: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchCastList(this.props.match.params.movieId)
      .then(({ cast }) => {
        this.setState({
          casts: cast,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { casts, isLoading, error } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {error && <Error text={error} />}
        {casts && <CastList casts={casts} />}
      </>
    );
  }
}
