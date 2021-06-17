export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN'; 
export const ACTION_SAVE_USER = 'ACTION_SAVE_USER';


export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const actionSaveUser = (member, token) => ({
  type: ACTION_SAVE_USER,
  member,
  token,
})