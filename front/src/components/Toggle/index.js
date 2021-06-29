import React from 'react'
import { func, string } from 'prop-types';

import './toggle.scss';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <div className="switch-checkbox">
    <label className="switch">
      <input type="checkbox" onClick={toggleTheme} />
      <span className="slider round"> </span>
    </label>
  </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
