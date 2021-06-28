// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import of components
// eslint-disable-next-line import/no-extraneous-dependencies
import Cards from 'src/containers/Cards';

// Import scss
import './style.scss';

// Display of watchlist
const Results = ({ newResearch, loading }) => (
  <div className="pickyMood">
    <ToastContainer
      className="pickyMood-toast-Container"
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
    <div className="pickyMood-question">
      Suivant vos critères de recherche, nous vous proposons...
    </div>
    {// Cards with the results of the research
    }
    <Cards currentPage="mood" loading={loading} />
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
