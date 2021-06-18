export const GET_RANDOM_SUCCESS = 'GET_SERIE_SUCCESS';
export const GET_RANDOM = 'GET_RANDOM';

export const getRandomSuccess = (ranmovie, ranshow) => ({
  type: GET_RANDOM_SUCCESS,
  ranmovie: ranmovie, 
  ranshow: ranshow,
});

export const getRandom = () => ({
  type: GET_RANDOM,
});

