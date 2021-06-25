import { RESET_PROFIL, UPDATE_PROFIL_ERROR_FOR_PSWD, ACTION_SAVE_PROFIL, UPDATE_PROFIL_ERROR } from 'src/actions/profil';

export const inialState = {
  member: '',
  pseudo: '',
  errorMessage: '',
  errorMessagePswd: '',
};

const profilReducer = (state = inialState, action = {}) => {
  switch (action.type) {
    case ACTION_SAVE_PROFIL: 
      return {
        ...state, 
        member: action.member,
        pseudo: action.pseudo,
      };

    case UPDATE_PROFIL_ERROR: 
      return {
        ...state, 
        errorMessage: action.value
      }  
    
      case UPDATE_PROFIL_ERROR_FOR_PSWD: 
      return {
        ...state,
        errorMessagePswd: action.value
      }

      case RESET_PROFIL: 
      return {
        ...state, 
        errorMessage: '',
        errorMessagePswd: ''
      }
      default:
        return state;
  };
};


export default profilReducer;
