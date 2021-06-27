import { GET_BOOKMARK_SUCCESS, GET_BOOKMARKS_IDS_SUCCESS } from 'src/actions/watchlist';

export const initialState = {
  wish: [],
  bookmarksIds: [],
  
};

const watchlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BOOKMARK_SUCCESS: {
      return {
        ...state,
        wish: action.wishlist,
      }
    };
    case GET_BOOKMARKS_IDS_SUCCESS: {
      return {
        ...state,
        bookmarksIds: action.bookmarksIds,
      }
    };
    default:
      return state;
  }
};

export default watchlistReducer;
