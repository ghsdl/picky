import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import signupReducer from './signup';
import pickyMoodReducer from './pickyMood';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  signup: signupReducer,
  pickyMood: pickyMoodReducer,
});

export default rootReducer;
