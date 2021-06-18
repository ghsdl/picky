import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './signupform.scss';

const SignUpForm = ({
  pseudo,
  email,
  password,
  confirmationPassword,
  changeField,
  handleSignUp,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <form
      autoComplete="off"
      className="signUpForm"
      onSubmit={handleSubmit}
    >
      <Field
        type="text"
        name="pseudo"
        placeholder="Pseudo"
        onChange={changeField}
        value={pseudo}
      />
      <Field
        type="email"
        name="email"
        placeholder="Adresse Email"
        onChange={changeField}
        value={email}
      />
      <Field
        type="password"
        name="password"
        placeholder="Mot de passe"
        onChange={changeField}
        value={password}
      />
      <Field
        type="password"
        name="confirmationPassword"
        placeholder="Confirmation du mot de passe"
        onChange={changeField}
        value={confirmationPassword}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

SignUpForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmationPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
