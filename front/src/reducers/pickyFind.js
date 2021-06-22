import { SAVE_PROGRAMS, CHANGE_STATE } from 'src/actions/pickyFind';
import { SAVE_PLATFORMS } from 'src/actions/platforms';
import { RESET } from 'src/actions/suggestions';

export const initialState = {
  movies: [],
  shows: [],
  platforms: [],
  loading: true,
  loadingPlatforms: true,
  research: false,
};

const pickyFindReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROGRAMS: {
      return {
        ...state,
        movies: action.movies,
        shows: action.shows,
        loading: false,
        research: true,
      };
    };
    case SAVE_PLATFORMS: {
      return {
        ...state,
        platforms: action.platforms,
      };
    };
    case CHANGE_STATE: {
      return {
        ...state,
        loading: true,
        research: true,
      }
    }

    case RESET: {
      return {
        ...state,
        movies: [],
        shows: [],
        platforms: [],
        loading: true,
        loadingPlatforms: true,
        research: false,
      }
    }
    default:
      return state;
  }
};

export default pickyFindReducer;
