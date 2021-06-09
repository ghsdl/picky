import { combineReducers } from 'redux';

import headerReducer from './header';
import searchReducer from './search';

const rootReducer = combineReducers({
  header: headerReducer,
  search: searchReducer,
});

export default rootReducer;
