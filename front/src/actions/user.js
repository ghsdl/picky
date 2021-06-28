export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const ACTION_SAVE_USER = 'ACTION_SAVE_USER';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const UPDATE_SIGN_IN_ERROR = 'UPDATE_SIGN_IN_ERROR';
export const RESET = 'RESET';

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const actionSaveUser = (member, token, pseudo) => ({
  type: ACTION_SAVE_USER,
  member,
  token,
  pseudo,
});

export const signUp = (value, key) => ({
  type: SIGN_UP,
  value,
  key,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateSignInError = (value) => ({
  type: UPDATE_SIGN_IN_ERROR,
  value,
});

export const reset = () => ({
  type: RESET,
})