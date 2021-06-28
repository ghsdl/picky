import React from 'react';
import PropTypes from 'prop-types';
import { classie } from 'src/selectors/user'
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
  classie(window);
  //Style();
  const className= `gate__${name}`
  return (
    
      <span>
				<input 
          className={className}
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
        />
				<label htmlFor={inputId}>  
          {placeholder}
				</label>
		  </span>
    
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


       