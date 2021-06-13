// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ShowOrSeries from 'src/components/PickyMood/ShowOrSeries';

// == Composant

const App = () => (
  <div className="app">
    <Header />
    <ShowOrSeries />
  </div>
);

// == Export
export default App;
