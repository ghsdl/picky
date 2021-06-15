import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'src/components/Header';

const SignUp = () => (
  <>
    <Header />
    <div className="signUp">
      <h2 className="signUp__title"> Inscrivez-vous à Picky</h2>
      <Link className="signUp__signIn"> Déjà inscrit? Connectez-vous! </Link>
    </div>
  </>
);

export default SignUp;
