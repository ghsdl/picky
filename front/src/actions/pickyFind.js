export const FETCH_PROGRAMS = 'FETCH_PROGRAMS';
export const SAVE_PROGRAMS = 'SAVE_PROGRAMS';

export const fetchPrograms = (searchText) => ({
  type: FETCH_PROGRAMS,
  searchText,
});

export const savePrograms = (movies, shows) => ({
  type: SAVE_PROGRAMS,
  movies,
  shows,
});
