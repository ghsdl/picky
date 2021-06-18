import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

// eslint-disable-next-line import/no-extraneous-dependencies
import App from 'src/components/App';
// eslint-disable-next-line import/no-extraneous-dependencies
import { store, persistor } from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
