import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import App from 'src/containers/App';
// eslint-disable-next-line import/no-extraneous-dependencies
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
