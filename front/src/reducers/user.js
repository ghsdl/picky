// eslint-disable-next-line import/no-extraneous-dependencies
import {
  CHANGE_INPUT_VALUE,
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
    default:
      return state;
  }
};

export default userReducer;
