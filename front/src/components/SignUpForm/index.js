import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './signupform.scss';
import { Link } from 'react-router-dom'
const SignUpForm = ({
  pseudo,
  email,
  password,
  confirmationPassword,
  changeField,
  handleSignUp,
  errorMessage,
  resetPage,
}) => {

  useEffect(() => {
    return () => {
      resetPage();

    }
  }, []);

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
            required
          />
          <Field
            type="email"
            name="email"
            placeholder="Adresse Email"
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
          <Field
            type="password"
            name="confirmationPassword"
            placeholder="Confirmation du mot de passe"
            onChange={changeField}
            value={confirmationPassword}
            required
          />
          {errorMessage.length > 1 &&
            <p className="input-middle-errorMessage">
              {errorMessage}
            </p>
          }
<<<<<<< HEAD

          <button type="submit" className="formUser-login">S'inscrire</button>

        </form>
        <Link to="/signin">
          <button className="redirect">
            Déjà inscrit? Connectez-vous!
          </button>
        </Link>
      </div>
=======
        
        <button type="submit" className="formUser-login">S'inscrire</button>
          
      </form>
      <Link to="/signin"> 
        <button className = "redirect"> 
            Déjà inscrit? Connectez-vous! 
        </button>
      </Link>
    </div>
>>>>>>> a1206d728ae78bc9bf93ec35eb8b597e22356966
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
  resetPage: PropTypes.func.isRequired,
};

export default SignUpForm;
