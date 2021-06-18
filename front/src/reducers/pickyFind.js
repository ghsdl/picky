import { FETCH_PROGRAMS, SAVE_PROGRAMS } from 'src/actions/pickyFind';
import { FETCH_PLATFORMS, SAVE_PLATFORMS } from 'src/actions/platforms';

export const initialState = {
  movies: [],
  shows: [],
  platforms: [],
  loading: true,
  loadingPlatforms: true,
};

const pickyFindReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROGRAMS:
      //console.log('loading quand on fetch programs', loading);
      return {
        ...state,
        loading: true,
      };
    case SAVE_PROGRAMS: {
      // console.log('case', SAVE_RECIPES);
      // ici on va traiter le changement de state
      // => on injecte les data contenu dans l'action dans la proriété list
      //console.log('movies in reducer', action.movies);
      //console.log('shows in reducer', action.shows);
      return {
        ...state,
        movies: action.movies,
        shows: action.shows,
        loading: false,
      };
    };
    case FETCH_PLATFORMS:
      return {
        ...state,
      };
    case SAVE_PLATFORMS: {
      console.log('platforms in reducer', action.platforms);
      return {
        ...state,
        platforms: action.platforms,
      };
    }
    default:
      return state;
  }
};

export default pickyFindReducer;
