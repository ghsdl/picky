// Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Import scss
import './searchbar.scss';

// Display of the searchbar
const SearchBar = ({ searchInputValue, onInputChange, loadPrograms }) => {
  // When opening the page, there is an automatic focus on the input of the searchbar
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // When the user submits, there is a request to load the programs
  const handleSubmit = (evt) => {
    evt.preventDefault();
    loadPrograms();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="searchbar__input"
        type="text"
        placeholder="Rechercher une série ou un film"
        value={searchInputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
