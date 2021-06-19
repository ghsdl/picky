import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import pickyMoodReducer from './pickyMood';
import suggestionsReducer from './suggestions';
import statusReducer from './status';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  pickyMood: pickyMoodReducer,
  sug: suggestionsReducer,
  status: statusReducer,
});

export default rootReducer;
