export const GET_RANDOM_MOVIE = 'GET_RANDOM_MOVIE';
export const GET_RANDOM_SERIE = 'GET_RANDOM_SERIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_SERIE_SUCCESS = 'GET_SERIE_SUCCESS';

export const getRandomMovie = () => ({
  type: GET_RANDOM_MOVIE,
});

export const getRandomSerie = () => ({
  type: GET_RANDOM_SERIE,
});

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie: movie,
});

export const getSerieSuccess = (serie) => ({
  type: GET_SERIE_SUCCESS,
  serie: serie,
});

