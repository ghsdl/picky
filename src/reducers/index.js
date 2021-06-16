import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import signupReducer from './signup';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  signup: signupReducer,
});

export default rootReducer;
