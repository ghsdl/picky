import {
  CHANGE_PSEUDO_INPUT,
  CHANGE_EMAIL_INPUT,
  CHANGE_PASSWORD_INPUT,
  CHANGE_CONFIRMATION_PASSWORD_INPUT,
} from 'src/actions/signup';

const initialState = {
  pseudoInput: '',
  emailInput: '',
  passwordInput: '',
  confirmationPasswordInput: '',
};

const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PSEUDO_INPUT:
      return {
        ...state,
        pseudoInput: action.newValue,
      };
    case CHANGE_EMAIL_INPUT:
      return {
        ...state,
        emailInput: action.newValue,
      };
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.newValue,
      };
    case CHANGE_CONFIRMATION_PASSWORD_INPUT:
      return {
        ...state,
        confirmationPasswordInput: action.newValue,
      };
    default:
      return state;
  }
};

export default signupReducer;
