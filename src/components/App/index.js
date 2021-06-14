// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies

import Feelings from 'src/components/PickyMood/Feelings';

// == Composant

const App = () => (
  <div className="app">
    <Header />
    <Feelings />
  </div>
);

// == Export
export default App;
