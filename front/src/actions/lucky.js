export const GET_RANDOM_FOR_PICKY_LUCKY = 'GET_RANDOM_FOR_PICKY_LUCKY';

export const getRandomForPickyLucky = () => ({
  type: GET_RANDOM_FOR_PICKY_LUCKY,
});


export const SET_PICKY_TO_TRUE = 'SET_PICKY_TO_TRUE';
export const setPickyToTrue = () => ({
  type: SET_PICKY_TO_TRUE,
});

export const SAVE_INFO_PICKY_LUCKY = 'SAVE_INFO_PICKY_LUCKY';
export const saveInfoPickyLucky = (movie) => ({
  type: SAVE_INFO_PICKY_LUCKY,
  movie
  
});

export const SAVE_INFO_PICKY_LUCKY_SHOW = 'SAVE_INFO_PICKY_LUCKY_SHOW';
export const saveInfoPickyLuckyShow = (show) => ({
  type: SAVE_INFO_PICKY_LUCKY_SHOW,
  show
});


export const CLEAN_UP_PICKY_LUCKY = 'CLEAN_UP_PICKY_LUCKY';
export const cleanUpPickyLucky = () => ({
  type: CLEAN_UP_PICKY_LUCKY,
});

export const GET_RANDOM_FOR_PICKY_LUCKY_SHOW = 'GET_RANDOM_FOR_PICKY_LUCKY_SHOW';
export const getRandomForPickyLuckyShow = () => ({
  type: GET_RANDOM_FOR_PICKY_LUCKY_SHOW,
});

export const SET_PICKY_SHOW_TO_TRUE ='SET_PICKY_SHOW_TO_TRUE,';
export const setPickyShowToTrue = () => ({
  type: SET_PICKY_SHOW_TO_TRUE,
});