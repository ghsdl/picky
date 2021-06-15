export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';

export const changeprofile = (newValue, email, username, bio, password) => ({
  type: CHANGE_PROFILE,
  newValue,
  email,
  username,
  bio,
  password,
});
