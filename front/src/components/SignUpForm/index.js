import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './signupform.scss';
import { Redirect, Link } from 'react-router-dom'
const SignUpForm = ({
  pseudo,
  email,
  password,
  confirmationPassword,
  changeField,
  handleSignUp,
  errorMessage,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <div className="formUser">
    <div className="formUser-input">
      <form
        autoComplete="off"
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
        { errorMessage.length >1 &&  
            <p className="formUser-ErrorMessage"> 
                {errorMessage}
            </p>
          }
        
        <button type="submit" className="formUser-login">S'inscrire</button>
          
      </form>
      <button className = "redirect"> 
        <Link to="/signin"> 
          Déjà inscrit? Connectez-vous! 
        </Link>
      </button>
    </div>
    </div>
  );
};

SignUpForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmationPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default SignUpForm;
