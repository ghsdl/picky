import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import signUp from 'src/middlewares/signUp';
import auth from 'src/middlewares/auth';
import result from 'src/middlewares/pickyMood'

import suggestions from 'src/middlewares/suggestions';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['status'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

// eslint-disable-next-line import/no-extraneous-dependencies




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(signUp, auth, suggestions, result),
));

const persistor= persistStore(store)

export { store, persistor };
