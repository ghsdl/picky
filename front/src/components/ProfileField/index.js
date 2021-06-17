import React from 'react';
//import PropTypes from 'prop-types';

import './profilefield.scss'

const ProfileField = ({
  email,
  username,
  bio,
  password,
}) => {
  return (
    <div className="field"> 
      <div className="field-container">
        <label> Adresse e-mail </label>
        <input
          defaultValue={email}
          name="email"
          className="field-input"
          placeholder=""
          type="email"
        />
      </div>
      <div className="field-container"> 
        <label> Pseudo </label>
        <input
          defaultValue={username}
          name="pseudo"
          className="field-input"
          placeholder= ""
          type="text"
          maxLength="8"
        />
      </div>
      <div className="field-container">
        <label> Biographie </label>
        <input
          defaultValue={bio}
          name="bio"
          className="field-input"
          placeholder= ""
          type="text"
          maxLength="100"
        />
      </div>
      <div className="field-container">
        <label> Mot de passe </label>
        <input
          defaultValue={password}
          name="password"
          className="field-input"
          placeholder= ""
          type="password"
          maxLength="8"
        />
      </div>
      <button className="field-update"> Update Profile </button>
    </div>
  );
};



export default ProfileField;
