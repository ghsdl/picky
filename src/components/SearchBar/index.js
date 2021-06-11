import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchInputValue, onInputChange }) => {
  // When opening the page, there is an automatic focus on the input of the searchbar
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className="searchbar__input"
      type="text"
      placeholder="Rechercher une série ou un film"
      value={searchInputValue}
      onChange={onInputChange}
    />
  );
};

SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
