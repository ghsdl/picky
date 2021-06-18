import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import suggestions from 'src/middlewares/suggestions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(suggestions),
);

const store = createStore(reducer, enhancers);

export default store;
