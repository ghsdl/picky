import React from 'react';

import Header from 'src/containers/Header';
import Cards from 'src/components/Cards';

import './wish.scss';

const Wish = () => (
  <div className="wish">
    <Header />
    <p>Votre watchlist</p>
    <Cards />
  </div>
);

export default Wish;
