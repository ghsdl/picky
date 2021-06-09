import React from 'react';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchInputValue, onInputChange }) => (
  <div>
    <input
      type="text"
      placeholder="Jurassic Park"
      value={searchInputValue}
      onChange={onInputChange}
    />
  </div>
);

SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
