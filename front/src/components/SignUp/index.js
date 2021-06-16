import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'src/containers/Header';
import SignUpForm from 'src/containers/SignUpForm';

import './signup.scss';

const SignUp = () => (
  <>
    <Header />
    <div className="signUp">
      <h2 className="signUp__title"> Inscrivez-vous à Picky</h2>
      <SignUpForm />
      <Link to="/signin" className="signUp__signIn"> Déjà inscrit? Connectez-vous! </Link>
    </div>
  </>
);

export default SignUp;
