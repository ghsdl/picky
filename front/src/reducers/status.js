import { 
  ACTION_SAVE_USER,
  LOGOUT,
} from 'src/actions/user'

const initialState= { 
  isConnected: false,
  token: '',
}

const statusReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    case ACTION_SAVE_USER:
      return {
        ...state,
        isConnected: true,
        token: action.token,        
      };
    case LOGOUT:
    return {
      ...state,
      isConnected: false,
      token: '',
      };

    default:
      return state;
  }
};

export default statusReducer;
