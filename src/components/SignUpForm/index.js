import React from 'react';
import PropTypes from 'prop-types';

import './signupform.scss';

const SignUpForm = ({
  pseudoInput, emailInput, passwordInput, confirmationPasswordInput,
  onPseudoChange, onEmailChange, onPasswordChange, onConfirmationPasswordChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(pseudoInput, emailInput, passwordInput, confirmationPasswordInput);
  };
  return (
    <form
      className="signUpForm"
      onSubmit={handleSubmit}
    >
      <div className="signUpForm__field">
        <label htmlFor="pseudo" className="signUpForm__field__label">Pseudo
          <input
            className="signUpForm__field__input"
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            required
            value={pseudoInput}
            onChange={onPseudoChange}
          />
        </label>
      </div>
      <div className="signUpForm__field">
        <label htmlFor="email" className="signUpForm__field__label">Email
          <input
            className="signUpForm__field__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={emailInput}
            onChange={onEmailChange}
          />
        </label>
      </div>
      <div className="signUpForm__field">
        <label htmlFor="password" className="signUpForm__field__label">Mot de passe
          <input
            className="signUpForm__field__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            value={passwordInput}
            onChange={onPasswordChange}
          />
        </label>
      </div>
      <div className="signUpForm__field">
        <label htmlFor="password-confirmation" className="signUpForm__field__label">Confirmez votre mot de passe
          <input
            className="signUpForm__field__input"
            type="password"
            name="password-confirmation"
            placeholder="Confirmation de mot de passe"
            required
            value={confirmationPasswordInput}
            onChange={onConfirmationPasswordChange}
          />
        </label>
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
