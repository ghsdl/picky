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
  <form>
    <div className="row"> 
      <span>
        <input
          name="email"
          className="gate"
          placeholder={email}
          type="email"
          id="email"
        />
        <label htmlFor="element">
          Email
        </label>
      </span>
      
      <span>
        <input
          name="pseudo"
          className="gate"
          placeholder= {username}
          type="text"
          maxLength="8"
          id="usernam"
        />
        <label htmlFor="username">
            Pseudo
        </label> 
      </span>  

      
     
      <span>
        <input
          name="bio"
          className="gate"
          placeholder={bio}
          type="text"
          maxLength="100"
          id="bio"
        />
        <label htmlFor="Bio">
          Bio
        </label>
      </span>  
      
      
      <span>
        <input
          name="password"
          className="gate"
          placeholder={password}
          type="password"
          maxLength="8"
          id="password"
        />
        <label htmlFor="MotDePasse">
          Mot de Passe
        </label>
      </span>
    </div>

    <button className="field-update"> Update Profile </button>
  </form>
  );
};





export default ProfileField;
