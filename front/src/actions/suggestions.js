export const GET_RANDOM_SUCCESS = 'GET_SERIE_SUCCESS';
export const GET_RANDOM = 'GET_RANDOM';

export const getRandomSuccess = (ranmovie) => ({
  type: GET_RANDOM_SUCCESS,
  ranmovie: ranmovie, 
});

export const getRandom = () => ({
  type: GET_RANDOM,
});

