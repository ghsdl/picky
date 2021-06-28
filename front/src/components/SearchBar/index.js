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
  <div className="cover">
    <form className="form" onSubmit={handleSubmit}>
      <div className="tb">
        <div className="td">
          <input 
            className="input"
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchInputValue}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="td" className="s-cover">
          <button className="button" type="submit">
            <div className="s-circle" />
            <span className="span" />
          </button>
        </div>
      </div>
    </form>
</div>
 )
};

SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
