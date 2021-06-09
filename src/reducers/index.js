import { combineReducers } from 'redux';

import headerReducer from './header';

const rootReducer = combineReducers({
  header: headerReducer,
});

export default rootReducer;
