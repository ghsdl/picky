import React from 'react';
import Header from 'src/containers/Header';
import Typical from 'react-typical'
// import PropTypes from 'prop-types';

import './mood-series-movies.scss';

const SeriesMovies = () => (
  <div>
    <Header />
    <div className="mood">
      <Typical
        className="mood-question"
        steps={['Êtes vous plutôt...', 1000]}
        loop= {1}
        wrapper="p"
      />
      <div className="mood-buttons">
        <button className="option-film"> Film? </button>
        <button className="option-serie"> Serie? </button> 
      </div>
      <button className="mood-next"> Suivant</button>
     </div>
  </div>
)

export default SeriesMovies;
