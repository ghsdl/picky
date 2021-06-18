import { createStore, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import reducer from 'src/reducers';
import pickyFind from 'src/middlewares/pickyFind';
import signUp from 'src/middlewares/signUp';
import auth from 'src/middlewares/auth';
import platforms from 'src/middlewares/platforms';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(signUp, auth, pickyFind, platforms),
));

export default store;
