import React from 'react';
import Header from 'src/containers/Header';
import SearchBar from 'src/containers/SearchBar';

import './home.scss';

const Home = () => (
  <div>
    <Header />
    <div className="home">
      <div className="home__searchBar">
        <p>Le moteur de recherche pour vos moments devant la TV</p>
        <SearchBar />
        <p>Suggestion: Jurassic Park, Friends</p>
      </div>
      <div className="home__pickyMood">
        <p>Vous ne savez pas quoi regarder? Faites nous confiance!</p>
        <a>Picky Mood</a>
      </div>
    </div>
  </div>
);

export default Home;
