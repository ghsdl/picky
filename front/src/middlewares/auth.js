import axios from 'axios'; 
import { LOGIN, actionSaveUser, updateProfilError } from 'src/actions/user'

const auth = (store) => (next) => (action) => {
  switch (action.type){
    case LOGIN: {
      const state = store.getState();
      axios.post('https://projet-picky.herokuapp.com/signin', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log(`response`, response)
          const { email, token, pseudo} = response.data;
          const saveUser = actionSaveUser(email, token, pseudo);
          store.dispatch(saveUser);
        })
        .catch((error) => {
          store.dispatch(updateProfilError(error.response.data))
          console.log(error.response.data)
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth
