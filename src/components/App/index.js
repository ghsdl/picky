// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import Plateforms from 'src/components/PickyMood/Plateforms';

// == Composant

const App = () => (
  <div className="app">
    <Header />
    <Plateforms />
  </div>
);

// == Export
export default App;
