import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import pickyMoodReducer from './pickyMood';
import suggestionsReducer from './suggestions';
import statusReducer from './status';
import pickyFindReducer from './pickyFind';
import platformsReducer from './platforms';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  pickyMood: pickyMoodReducer,
  sug: suggestionsReducer,
  status: statusReducer,
  pickyFind: pickyFindReducer,
  platforms: platformsReducer,
});

export default rootReducer;
