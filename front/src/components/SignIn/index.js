import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
import './style.scss';
import PropTypes from 'prop-types';
import Field from './Field';
import { Redirect } from 'react-router-dom'

export default function SignIn({
  changeField,
  email,
  password,
  handleLogin,
  isConnected,
  errorMessage,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
   
    <>
      <Header />
      {isConnected && (
       <Redirect to="/"/>
    )}
      <div className="pickyMood">
        <div className="pickyMood-question">
          Connectez-Vous à Picky
        </div>
      </div>
      <div className="formUser">
        <div className="formUser-input">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
              onChange={changeField}
              value={email}
            />
            <Field
              type="password"
              name="password"
              placeholder="password"
              onChange={changeField}
              value={password}
            />
            { errorMessage.length >1 &&  <p className="formUser-ErrorMessage"> 
              {errorMessage}
            </p>
            }
           
            <button
              type="submit"
              className="formUser-login"
            >
              Se Connecter
            </button>
          </form>
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
  errorMessage: PropTypes.string.isRequired
};
