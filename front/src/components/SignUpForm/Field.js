import React from 'react';
import PropTypes from 'prop-types';

import './signupform.scss';

export default function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <div className="signUpForm__field">
      <label htmlFor={inputId} className="signUpForm__field__label">{placeholder}
        <input
          className="signUpForm__field__input"
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          placeholder={placeholder}
          name={name}
          required
        />
      </label>
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};
