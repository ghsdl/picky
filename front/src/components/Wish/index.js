// Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import of components
import Header from 'src/containers/Header';
import Cards from 'src/containers/Cards';

// Import scss
import './wish.scss';

// Display of watchlist
const Wish = ({ wish, addRemoveWish, loadBookmark }) => {
  useEffect(() => {
    loadBookmark();
  }, []);

  return (
  <div className="wish">
    {// Header 
    }
    <Header />
    <h1>Votre watchlist</h1>
    {// Cards
    }
    <Cards currentPage="wish" loading={false} />
    {/*
    {wish.map((list) => { 
    <Cards 
      currentPage="wish" loading={false}
      title={list.title}
      poster={list.poster}
      platformsInfos={list.platform}
      key= {list.id}
      onClick = {() => addRemoveWish(list)}
    /> })} 
    */
    }
    {// Footer of the watchlist, with 2 buttons to go to Picky Find and Picky Mood
    }
    <div className="wish__gradient">
      <div className="wish__footer">
        <Link className="wish__footer__link" to="/">Find</Link>
        <p className="wish__footer__text">Continuez à explorer</p>
        <Link className="wish__footer__link" to="/mood">Mood</Link>
      </div>
    </div>
  </div>
  )
};

export default Wish;
