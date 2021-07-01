import axios from 'axios'; 
import { SIGN_UP, updateSignInError } from 'src/actions/user'
const signUp = (store) => (next) => (action) => {
  switch (action.type){
    case SIGN_UP: {

      const state = store.getState();
      axios.post('http://localhost:3000/signup', {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        confirmationPassword: state.user.confirmationPassword,
      })
        .then((response) => {
         window.location.href="/signIn"
        })
        .catch((error) => {
          store.dispatch(updateSignInError(error.response.data.error || error.response.data))
        });
      break;
    }
    default:
      next(action);
  }
};

export default signUp