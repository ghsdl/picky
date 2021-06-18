import { GET_MOVIE_SUCCESS } from '../actions/suggestions';

export const initialState = {
  movie : [],
  serie : [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
        case GET_MOVIE_SUCCESS:
          return {
            ...state,
            movie: action.movie,
          };
      default:
        return state;
  }
};

export default reducer;
