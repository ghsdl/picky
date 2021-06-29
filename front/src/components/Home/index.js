// Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typical from 'react-typical'

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
    <ToastContainer
      className="home__toast-Container"
      color="black"
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
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
        <p className="home__searchBar__presentation">
          Le moteur de recherche pour vos moments devant la TV
        </p>
        <SearchBar />
          <p className="home__searchBar__suggestion">Essayez: {ranmovie.title} ou {ranshow.title}</p>
      </div>
      {// Button to go to Picky Mood
      }
      <div className="home__pickyMood">
        <p>Vous ne savez pas quoi regarder? Faites nous confiance!</p>
        <div className="button-homePage">
          {isConnected && (
            <Link to="/mood" className="home__pickyMood__linkLeft">Picky Mood</Link>
          )}
          {!isConnected && (
            <Link to="/signUp" className="home__pickyMood__linkLeft">Picky Mood</Link>
          )}
          <Link to="/pickyLucky" className="home__pickyMood__linkRight">Picky Lucky</Link>
        </div>
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
