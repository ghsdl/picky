import React from 'react';
import PropTypes from 'prop-types';

import './signupform.scss';

const SignUpForm = ({
  pseudoInput, emailInput, passwordInput, confirmationPasswordInput,
  onPseudoChange, onEmailChange, onPasswordChange, onConfirmationPasswordChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <form
      className="signUpForm"
      onSubmit={handleSubmit}
    >
      <div className="signUpForm__field">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          placeholder="Pseudo"
          required
          value={pseudoInput}
          onChange={onPseudoChange}
        />
      </div>
      <div className="signUpForm__field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={emailInput}
          onChange={onEmailChange}
        />
      </div>
      <div className="signUpForm__field">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
          value={passwordInput}
          onChange={onPasswordChange}
        />
      </div>
      <div className="signUpForm__field">
        <label htmlFor="password-confirmation">Confirmez votre mot de passe</label>
        <input
          type="password"
          name="password-confirmation"
          placeholder="Confirmation de mot de passe"
          required
          value={confirmationPasswordInput}
          onChange={onConfirmationPasswordChange}
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

SignUpForm.propTypes = {
  pseudoInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  confirmationPasswordInput: PropTypes.string.isRequired,
  onPseudoChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onConfirmationPasswordChange: PropTypes.func.isRequired,
};

export default SignUpForm;
