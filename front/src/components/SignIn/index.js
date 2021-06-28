import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
import './style.scss';
import PropTypes from 'prop-types';
import Field from './Field';
import { Redirect, Link } from 'react-router-dom'

export default function SignIn({
  changeField,
  email,
  password,
  handleLogin,
  isConnected,
  errorMessage,
  resetPage,

}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    return () => {
      resetPage();

    }
  }, []);
  return (

    <>
      {isConnected && (
        <Redirect to="/" />
      )}
      <Header />

      <div className="pickyMood">
        <div className="pickyMood-question">
          Connectez-Vous à Picky
        </div>
      </div>
      <div className="formSignIn">
        <div className="form-input">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="row"> 
              <Field
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeField}
                value={email}
                required
              />
              <Field
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
                required
              />
              {errorMessage.length > 1 && <p className="input-middle-errorMessage">
                {errorMessage}
              </p>
              } 
            </div>
            

              <button
                type="submit"
                className="redirectSignIn"
              >
                Se Connecter
              </button>
           
          </form>
            <Link to='/signUp'>
              <button className = "redirectSignIn">
                  Pas encore de compte? Inscrivez-vous ! 🍿🍿
              </button>
            </Link>
        </div>
      </div>
    </>
  );
}

SignIn.propTypes = {
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isConnected: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
  resetPage: PropTypes.func.isRequired,
};
