import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

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
    <div className="input input--chisato">
      <input
        className="input__field input__field--chisato"
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <label
        htmlFor={inputId}
        className="input__label input__label--chisato"
      >
        {placeholder}
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
