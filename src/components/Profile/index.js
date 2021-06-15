import React from 'react';
import './profile.scss';
import Header from 'src/containers/Header';
import ProfileField from 'src/components/ProfileField';

const Profile = () => (
  <>
    <Header />
    <div className="profile">
      <h2 className="profile-title"> Mon Profil</h2>
      <ProfileField />
      <button className="profile-delete"> Supprimer mon compte </button>
    </div>
  </>
)

export default Profile;
