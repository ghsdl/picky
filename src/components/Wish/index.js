import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'src/containers/Header';
import Cards from 'src/components/Cards';

import './wish.scss';

const Wish = () => (
  <div className="wish">
    <Header />
    <h1>Votre watchlist</h1>
    <Cards />
    <div className="wish__footer">
      <Link className="wish__footer__link" to="/">Picky Find</Link>
      <p className="wish__footer__text">Continuez à explorer</p>
      <Link className="wish__footer__link" to="/mood">Picky Mood</Link>
    </div>
  </div>
);

export default Wish;
