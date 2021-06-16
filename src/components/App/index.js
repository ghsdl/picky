// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import SignIn from 'src/containers/signIn';
// eslint-disable-next-line import/no-extraneous-dependencies
import PickyMood from 'src/containers/PickyMood';

// == Composant

const App = () => (
  <div className="app">
    <SignIn />
  </div>
);

// == Export
export default App;
