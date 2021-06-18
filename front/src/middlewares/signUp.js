import axios from 'axios'; 
import { SIGN_UP } from 'src/actions/user'

const signUp = (store) => (next) => (action) => {
  switch (action.type){
    case SIGN_UP: {
      
      const state = store.getState();
      
      axios.post('https://projet-picky.herokuapp.com/signup', {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
         console.log(response.data)
        })
        .catch((error) => {
          console.log(`error`, error)
        });
      break;
    }
    default:
      next(action);
  }
};

export default signUp