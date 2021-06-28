import React from 'react';
import PropTypes from 'prop-types';
import './profilefield.scss';

function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
  namebis,

}){

  const inputId = `field-${name}` 

  const handleChange = (evt) => {
    onChange(evt.target.value, name)
  }
 const className = `gate__${name}`
  return (
    <>
    <span>
        <input
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          className={className}
          onChange={handleChange}
          
        />
        <label htmlFor={placeholder}>
          {namebis}
        </label>
      </span>
    </>
  )
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


export default Field;