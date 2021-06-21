import { ADD_TO_WISH, REMOVE_FROM_WISH } from 'src/actions/watchlist';

export const initialState = {
  inWatchList: false,
  movies: [],
  shows: [],
  wish: [],
  
};

const watchlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_WISH:
      const movie = state.movies.find (
        (movie) => movie.id === action.payload.id
      );
      const show = state.shows.find (
        (show) => show.id === action.payload.id
      );
      const watchlist = state.wish.find((movie, show) =>
      movie.id === action.payload.id ? true : false,
      show.id === action.payload.id ? true : false
      );
      return {
        ...state,
        wish: watchList
          ? state.wish.map((movie, show) =>
            movie.id === action.playload.id,
            show.id === action.playload.id
          )
        : [...state.wish],
        inWatchList: true,
      };
      case REMOVE_FROM_WISH:
        return {
          ...state,
          wish: state.wish.filter((movie, show) =>
          movie.id !== action.playload.id,
          show.id !== action.playload.id
          ),
          inWatchList: false,
        };
    default:
      return state;
  }
};

export default watchlistReducer;
