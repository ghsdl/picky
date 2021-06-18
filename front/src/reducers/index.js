import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import watchlistReducer from './watchlist';
import pickyMoodReducer from './pickyMood';
import pickyFindReducer from './pickyFind';
import platformsReducer from './platforms';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  watchlist: watchlistReducer,
  pickyMood: pickyMoodReducer,
  pickyFind: pickyFindReducer,
  platforms: platformsReducer,
});

export default rootReducer;
