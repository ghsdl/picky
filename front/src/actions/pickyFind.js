export const FETCH_PROGRAMS = 'FETCH_PROGRAMS';
export const SAVE_PROGRAMS = 'SAVE_PROGRAMS';

export const fetchPrograms = () => ({
  type: FETCH_PROGRAMS,
});

export const savePrograms = (movies, shows) => ({
  type: SAVE_PROGRAMS,
  movies,
  shows,
});
