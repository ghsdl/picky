import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import pickyFind from 'src/middlewares/pickyFind';
import signUp from 'src/middlewares/signUp';
import auth from 'src/middlewares/auth';
import result from 'src/middlewares/pickyMood';
import suggestions from 'src/middlewares/suggestions';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import platforms from 'src/middlewares/platforms';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['status'],
}


const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(signUp, auth, suggestions, result, pickyFind, platforms),
));

const persistor= persistStore(store)

export { store, persistor };

export default store;
