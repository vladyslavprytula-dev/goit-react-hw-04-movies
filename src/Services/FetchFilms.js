import axios from 'axios';

const apiKey = '84c0024dcefbdee516447fa96d8971d2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const fetchTrendingFilms = () => {
  return axios
    .get(`trending/all/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};
const fetchMovieDetails = id => {
  return axios
    .get(`movie/${id}?api_key=${apiKey}`)
    .then(response => response.data);
};
const fetchMoviesPage = ({ searchMovie, currentPage }) => {
  return axios
    .get(
      `search/movie?api_key=${apiKey}&query=${searchMovie}&page=${currentPage}`,
    )
    .then(response => response.data.results);
};
const fetchCastList = id => {
  return axios
    .get(`movie/${id}/credits?api_key=${apiKey}`)
    .then(response => response.data);
};
const fetchReviews = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=${apiKey}`)
    .then(response => response.data.results);
};
export {
  fetchTrendingFilms,
  fetchMovieDetails,
  fetchMoviesPage,
  fetchCastList,
  fetchReviews,
};

// https://api.themoviedb.org/3/movie/550?api_key=84c0024dcefbdee516447fa96d8971d2

// https://api.themoviedb.org/3/trending/all/day?api_key=84c0024dcefbdee516447fa96d8971d2
