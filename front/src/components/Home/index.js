// Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Import of components
import Header from 'src/containers/Header';
import SearchBar from 'src/containers/SearchBar';
import Cards from 'src/containers/Cards';

// Import scss
import './home.scss';

// Display of home
const Home = ({ getRandom, ranmovie, ranshow, research, isConnected, resetPage, loading }) => {

  useEffect(()=>{
    getRandom();
  }, []);
  useEffect(() => {
    return () => {
      resetPage();
      
    }
  }, []);
  return(
  <div>
    {// Header
    }
    <Header />
    {// In the beginning, the searchbar is in the center of the page
    // When the user submits their research, the searchbar moves to the top of the page
    }
    <div className={classNames('home', { 'home--noResearch': !research, 'home--research': research })}>
      <div className="home__searchBar">
        {// Title, searchbar and suggestions
        }
        <p className="home__searchBar__presentation">Le moteur de recherche pour vos moments devant la TV</p>
        <SearchBar />
          <p className="home__searchBar__suggestion">Essayez: {ranmovie.title} ou {ranshow.title}</p>
      </div>
      {// Button to go to Picky Mood
      }
      <div className="home__pickyMood">
        <p>Vous ne savez pas quoi regarder? Faites nous confiance!</p>
        {isConnected && (
          <Link to="/mood">Picky Mood</Link>
        )}
        {!isConnected && (
          <Link to="/signUp">Picky Mood</Link>
        )}
      </div>
      {// Display of the results
      }
      <div className="home__results">
        <Cards currentPage="home" loading={loading} />
      </div>
    </div>
  </div>
  )};

Home.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  ranmovie: PropTypes.object.isRequired,
  ranshow: PropTypes.object.isRequired,
  isConnected: PropTypes.bool.isRequired,
  resetPage: PropTypes.func.isRequired
};

export default Home;
