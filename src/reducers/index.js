import { combineReducers } from 'redux';

import searchReducer from './search';
import userReducer from './user';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
