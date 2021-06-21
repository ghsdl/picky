export const FETCH_PROGRAMS = 'FETCH_PROGRAMS';
export const SAVE_PROGRAMS = 'SAVE_PROGRAMS';
export const CHANGE_STATE = 'CHANGE_STATE';

export const fetchPrograms = () => ({
  type: FETCH_PROGRAMS,
});

export const savePrograms = (movies, shows) => ({
  type: SAVE_PROGRAMS,
  movies,
  shows,
});

export const changeState = () => ({
  type: CHANGE_STATE,
})
