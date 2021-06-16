import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'src/containers/Header';
import './style.scss';
import PropTypes from 'prop-types';
import Field from './Field';

export default function SignIn({
  changeField,
  email,
  password,
  handleLogin,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <>
      <Header />
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
              placeHolder="Adresse Email"
              onChange={changeField}
              value={email}
            />
            <Field
              name="password"
              placeHolder="password"
              onChange={changeField}
              value={password}
            />
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
};
