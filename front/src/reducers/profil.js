import { ACTION_SAVE_PROFIL } from 'src/actions/profil';

export const inialState = {
  member: '',
  pseudo: ''
};

const profilReducer = (state = inialState, action = {}) => {
  switch (action.type) {
    case ACTION_SAVE_PROFIL: 
      return {
        ...state, 
        member: action.member,
        pseudo: action.pseudo,
      };
      default:
        return state;
  };
};


export default profilReducer;
