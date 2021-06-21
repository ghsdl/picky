import axios from 'axios'; 
import { SIGN_UP, updateProfilError } from 'src/actions/user'
import { Redirect } from 'react-router-dom'
const signUp = (store) => (next) => (action) => {
  switch (action.type){
    case SIGN_UP: {

      const state = store.getState();
      axios.post('https://projet-picky.herokuapp.com/signup', {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        confirmationPassword: state.user.confirmationPassword,
      })
        .then((response) => {
         console.log(response.data)
         window.location.href="/signIn"
        })
        .catch((error) => {
          store.dispatch(updateProfilError(error.response.data.error))
        });
      break;
    }
    default:
      next(action);
  }
};

export default signUp
