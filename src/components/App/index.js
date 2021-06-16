// == Import npm
import React from 'react';
// == Import
import './styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import SignUp from 'src/components/SignUp';
// == Composant

const App = () => (
  <div className="app">
    <SignUp />
  </div>
);

// == Export
export default App;
