import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from 'src/containers/Header';
import SignUpForm from 'src/containers/SignUpForm';


import './signup.scss';
const SignUp = ({ isConnected }) => {
  
  return (
  <>
   {isConnected && (
       <Redirect to="/"/>
    )}
    <Header />
    <div className="signUp">
      <h2 className="signUp__title"> Profitez des avantages d'un Picky Addict, Inscrivez-vous !</h2>
      <SignUpForm isConnected={isConnected} />
      </div>

  </>
  )
};

export default SignUp;
