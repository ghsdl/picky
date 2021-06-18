import { GET_RANDOM_SUCCESS, GET_RANDOM } from '../actions/suggestions';

export const initialState = {
  ranmovie : {},
  ranshow : {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM:
      return {
        ...state,
      };
    case GET_RANDOM_SUCCESS:
      return {
        ...state,
        ranmovie: action.ranmovie,
        ranshow: action.ranshow,
      };
      default:
        return state;
  }
};

export default reducer;
