import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import routes from './routes';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Error from './Components/Error/Error';
import './styles/base.scss';
const App = () => (
  <>
    <AppBar />
    <Container>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={Error} />
      </Switch>
    </Container>
  </>
);
export default App;
