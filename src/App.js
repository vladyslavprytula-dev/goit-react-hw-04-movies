import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import routes from './routes';
import './styles/base.scss';
const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-page" */),
);
const Error = lazy(() =>
  import('./Components/Error/Error' /*webpackChunkName: "error" */),
);
const App = () => (
  <>
    <AppBar />
    <Container>
      <Suspense>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={Error} />
        </Switch>
      </Suspense>
    </Container>
  </>
);
export default App;
