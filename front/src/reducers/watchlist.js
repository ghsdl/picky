import { ADD_REMOVE_WISH, GET_BOOKMARK_SUCCESS } from 'src/actions/watchlist';

export const initialState = {
  inWatchList: false,
  programswish: {},
  wish: [],
  
};

const watchlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_REMOVE_WISH: {
      return {
        ... state,
        wish: [...state.wish, action.programswish]
      };
    };
    case GET_BOOKMARK_SUCCESS: {
      return {
        ...state,
        wish: action.wishlist,
      }
    };
    default:
      return state;
  }
};

export default watchlistReducer;
