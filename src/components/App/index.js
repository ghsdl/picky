// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import PickyMoodFeeling from 'src/components/PickyMoodFeeling';

// == Composant

const App = () => (
  <div className="app">
    <Header />
    <PickyMoodFeeling />
  </div>
);

// == Export
export default App;
