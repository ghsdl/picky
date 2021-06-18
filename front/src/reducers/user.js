import {
  CHANGE_INPUT_VALUE,
  ACTION_SAVE_USER,
  LOGOUT,
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
        pseudo: action.pseudo,
        token: action.token,
        
      };

    case LOGOUT:
      return {
        ...state,
        isConnected: false,
        pseudo: '',
        token: '',
      };
    default:
      return state;
  }
};

export default userReducer;
