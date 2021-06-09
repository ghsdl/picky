import { CLICK_ON_TOGGLE } from 'src/actions/header';

const initialState = {
  openSettings: false,
};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLICK_ON_TOGGLE: {
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    }
    default:
      return state;
  }
};

export default headerReducer;
