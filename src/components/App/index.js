/* eslint-disable import/no-extraneous-dependencies */
// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Home from 'src/containers/Home';
import Wish from 'src/components/Wish';
import Profile from 'src/components/Profile';
import About from 'src/components/About';
import Error from 'src/components/Error';
import PickyMood from 'src/containers/PickyMood';
import SignIn from 'src/containers/signIn';
// == Composant

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wish">
        <Wish />
      </Route>
      <Route exact path="/mood">
        <PickyMood />
      </Route>
      <Route exact path="/profil">
        <Profile />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
