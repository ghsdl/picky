// == Import npm
import React from 'react';
import Home from 'src/containers/Home';

// == Import
import './styles.css';
import Header from 'src/components/Header';

// == Composant
const App = () => (
  <div className="app">
    <Home />
    <Header />
  </div>
);

// == Export
export default App;
