// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Home from 'src/containers/Home';
import Wish from 'src/components/Wish';
// == Composant

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wish">
        <Wish />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
