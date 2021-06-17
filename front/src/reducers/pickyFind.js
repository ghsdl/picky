import { SAVE_PROGRAMS } from 'src/actions/pickyFind';

export const initialState = {
  shows: [],
  movies: [],
  loading: true,
};

const pickyFindReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROGRAMS: {
      // console.log('case', SAVE_RECIPES);
      // ici on va traiter le changement de state
      // => on injecte les data contenu dans l'action dans la proriété list
      return {
        ...state,
        movies: [...action.movies],
        shows: [...action.shows],
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default pickyFindReducer;
