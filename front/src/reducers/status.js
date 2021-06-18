import { 
  ACTION_SAVE_USER,
  LOGOUT,
} from 'src/actions/user'

const initialState= { 
  isConnected: false,
}

const statusReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    case ACTION_SAVE_USER:
      return {
        ...state,
        isConnected: true,        
      };
    case LOGOUT:
    return {
      ...state,
      isConnected: false,
      };

    default:
      return state;
  }
};

export default statusReducer;
