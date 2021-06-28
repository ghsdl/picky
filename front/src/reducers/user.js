import {
  CHANGE_INPUT_VALUE,
  ACTION_SAVE_USER,
  UPDATE_SIGN_IN_ERROR,
  LOGIN,
  RESET,
} from 'src/actions/user';

const initialState = {
  isConnected: false,
  email: '',
  password: '',
  confirmationPassword: '',
  pseudo: '',
  token: '',
  errorMessage: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case LOGIN: 
      return {
        ...state,
        email: '',
        password: '',
        errorMessage: '',
      }

    case ACTION_SAVE_USER:
      return {
        ...state,
        isConnected: true,
        token: action.token,   
        pseudo: action.value,
        errorMessage: '',  
  
      };

    case UPDATE_SIGN_IN_ERROR: 
    return {
      ...state,
      errorMessage: action.value,
    };  
    case RESET: 
    return {
      ...state, 
      email: '',
      password: '',
      confirmationPassword: '',
      pseudo: '',
      token: '',
      errorMessage: '',
    }
    default:
      return state;
  }
};

export default userReducer;
