// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import of components
// eslint-disable-next-line import/no-extraneous-dependencies
import Cards from 'src/components/Cards';

// Import scss
import './style.scss';

// Display of watchlist
const Results = ({ newResearch }) => (
  <div className="pickyMood">
    <div className="pickyMood-question">
      Suivant vos critères de recherche, nous vous proposons...
    </div>
    {// Cards with the results of the research
    }
    <Cards currentPage="pickyMoodResults" loading={false}/>
    {// Button to do a new research
    }
    <div className="button">
      <div className="button-newResearch" onClick={newResearch}>
        Nouvelle recherche
      </div>
    </div>
  </div>
);

Results.propTypes = {
  newResearch: PropTypes.func.isRequired,
};

export default Results;
