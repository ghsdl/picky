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
      return {
        ...state,
        loading: true,
      };
    case SAVE_PROGRAMS: {
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
