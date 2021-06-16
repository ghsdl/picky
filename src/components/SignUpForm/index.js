import React from 'react';

import './signupform.scss';

const SignUpForm = () => (
  <form className="signUpForm">
    <div className="signUpForm__field">
      <label htmlFor="pseudo">Pseudo</label>
      <input type="text" name="pseudo" placeholder="Pseudo" />
    </div>
    <div className="signUpForm__field">
      <label htmlFor="mail">Email</label>
      <input type="email" name="mail" placeholder="Email" />
    </div>
    <div className="signUpForm__field">
      <label htmlFor="password">Mot de passe</label>
      <input type="text" name="password" placeholder="Mot de passe" />
    </div>
    <div className="signUpForm__field">
      <label htmlFor="password-confirmation">Confirmez votre mot de passe</label>
      <input type="text" name="password-confirmation" placeholder="Confirmation de mot de passe" />
    </div>
  </form>
);

export default SignUpForm;
