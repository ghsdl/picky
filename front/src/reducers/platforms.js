import { FETCH_PLATFORMS, SAVE_PLATFORMS } from 'src/actions/platforms';

export const initialState = {
  platforms: [],
  loadingPlatforms: true,
};

const platformsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default platformsReducer;
