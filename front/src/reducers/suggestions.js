import { GET_RANDOM_SUCCESS, GET_RANDOM } from '../actions/suggestions';

export const initialState = {
  ranmovie : {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM:
      return {
        ...state,
      };
    case GET_RANDOM_SUCCESS:
      console.log('action.ranmovie in reducer', action.ranmovie);
      return {
        ...state,
        ranmovie: action.ranmovie,
      };
      default:
        return state;
  }
};

export default reducer;
