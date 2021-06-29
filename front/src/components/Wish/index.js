// Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import of components
import Header from 'src/containers/Header';
import Cards from 'src/containers/Cards';

// Import scss
import './wish.scss';

// Display of watchlist
const Wish = ({ loadBookmark }) => {
  useEffect(() => {
    loadBookmark();
  }, []);

  return (
  <div className="wish">
    <ToastContainer
      className="wish__toast-Container"
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
    <div className="pickyWish">
      <h1 className="pickyWish-question">Votre watchlist</h1>
    </div>
    {// Cards
    }
    <Cards currentPage="wish" loading={false} />
    {// Footer of the watchlist, with 2 buttons to go to Picky Find and Picky Mood
    }
    <div className="wish__gradient">
      <div className="wish__footer">
        <Link className="wish__footer__link" to="/">FIND</Link>
        <p className="wish__footer__text">Continuez à explorer</p>
        <Link className="wish__footer__link" to="/mood">MOOD</Link>
      </div>
    </div>
  </div>
  )
};

export default Wish;
