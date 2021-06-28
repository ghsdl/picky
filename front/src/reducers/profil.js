import { RESET_PROFIL, UPDATE_PROFIL_ERROR_FOR_PSWD, ACTION_SAVE_PROFIL, UPDATE_PROFIL_ERROR_EMAIL_OR_PSEUDO } from 'src/actions/profil';

export const inialState = {
  member: '',
  pseudo: '',
  errorMessageEmailOrPseudo: '',
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

    case UPDATE_PROFIL_ERROR_EMAIL_OR_PSEUDO: 
      return {
        ...state, 
        errorMessageEmailOrPseudo: action.value
      }  
    
      case UPDATE_PROFIL_ERROR_FOR_PSWD: 
      return {
        ...state,
        errorMessagePswd: action.value
      }

      case RESET_PROFIL: 
      return {
        ...state, 
        errorMessageEmailOrPseudo: '',
        errorMessagePswd: ''
      }
      default:
        return state;
  };
};


export default profilReducer;
