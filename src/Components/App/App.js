import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import '../../styles/base.scss';
const HomePage = lazy(() =>
  import('../../views/HomePage' /*webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /*webpackChunkName: "movies-page" */),
);
const Error = lazy(() =>
  import('../Error/Error' /*webpackChunkName: "error" */),
);
const App = () => (
  <>
    <AppBar />
    <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={Error} />
        </Switch>
      </Suspense>
    </Container>
  </>
);
export default App;
