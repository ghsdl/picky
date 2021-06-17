import {
  CHANGE_INPUT_VALUE,
  ACTION_SAVE_USER,
  LOGOUT,
// eslint-disable-next-line import/no-unresolved
} from 'src/actions/user';

const initialState = {
  isConnected: false,
  email: '',
  password: '',
  confirmationPassword: '',
  pseudo: '',
  token: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case ACTION_SAVE_USER:
      return {
        ...state,
        isConnected: true,
        email: '',
        password: '',
        pseudo: action.pseudo,
        token: action.token,
      };

    case LOGOUT:
      return {
        ...state,
        isConnected: false,
        email: '',
        password: '',
        confirmationPassword: '',
        pseudo: '',
        token: '',
      };
    default:
      return state;
  }
};

export default userReducer;
