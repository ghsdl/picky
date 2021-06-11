import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      // When the input of the searchbar is empty, the searchbar is in the center of the page
      // If the user writes something in it, the searchbar moves to the top of the page
      className={classNames('searchbar__input', { 'searchbar__input--center': searchInputValue.length === 0, 'searchbar__input--up': searchInputValue.length > 0 })}
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
