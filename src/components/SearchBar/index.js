import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchInputValue, onInputChange }) => {
  // A l'ouverture de la page, le focus est fait automatiquement sur l'input de la searchbar
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Jurassic Park"
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
