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
  const className= value ? "input input--chisato input--filled" : "input input--chisato"
  return (
    <div>
      <span className={className}>
				<input 
          className="input__field input__field--chisato" 
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          name={name}
        />
				<label 
          className="input__label input__label--chisato" 
          htmlFor={inputId}>  
					<span 
            className="input__label-content input__label-content--chisato "
            data-content= {placeholder}
          >
            {placeholder}
          </span>
				</label>
		  </span>
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


       