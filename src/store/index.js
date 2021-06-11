import { createStore } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import reducer from 'src/reducers';

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
