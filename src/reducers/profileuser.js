import { CHANGE_PROFILE } from 'src/actions/profileuser';

export const inialState = {
  email: '',
  username: '',
  bio: '',
  password: '',
};

const reducer = (state = inialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      return {
        ...state,
        [action.email]: action.newValue,
        [action.username]: action.newValue,
        [action.bio]: action.newValue,
        [action.password]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
