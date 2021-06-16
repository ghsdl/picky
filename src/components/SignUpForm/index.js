import React from 'react';

const SignUpForm = () => (
  <form>
    <label htmlFor="pseudo">Pseudo</label>
    <input type="text" name="pseudo" placeholder="Pseudo" />
    <label htmlFor="mail">Email</label>
    <input type="email" name="mail" placeholder="Email" />
    <label htmlFor="password">Mot de passe</label>
    <input type="text" name="password" placeholder="Mot de passe" />
    <label htmlFor="password-confirmation">Confirmez votre mot de passe</label>
    <input type="text" name="password-confirmation" placeholder="Confirmation de mot de passe" />
  </form>
);

export default SignUpForm;
