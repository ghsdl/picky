import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';
import pickyMoodReducer from './pickyMood';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  pickyMood: pickyMoodReducer,
});

export default rootReducer;
