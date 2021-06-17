import { createStore, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import reducer from 'src/reducers';
import pickyFind from 'src/middlewares/pickyFind';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(pickyFind),
);

const store = createStore(reducer, enhancers);

export default store;
