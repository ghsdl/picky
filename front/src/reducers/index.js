import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import pickyMoodReducer from './pickyMood';
import suggestionsReducer from './suggestions';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  pickyMood: pickyMoodReducer,
  sug: suggestionsReducer,
});

export default rootReducer;
