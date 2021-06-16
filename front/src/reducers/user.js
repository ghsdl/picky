import {
  CHANGE_INPUT_VALUE,
  ACTION_SAVE_USER,
} from 'src/actions/user';

const initialState = {
  isConnected: true,
  email: '',
  password: '',
  pseudo: '',
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
      }
    default:
      return state;
  }
};

export default userReducer;
