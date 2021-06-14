// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Wish from 'src/components/Wish';
// == Composant

const App = () => (
  <div className="app">
    <Wish />
  </div>
);

// == Export
export default App;
