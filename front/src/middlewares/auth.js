import axios from 'axios'; 
import { LOGIN, actionSaveUser } from 'src/actions/user'

const auth = (store) => (next) => (action) => {
  switch (action.type){
    case LOGIN: {
      const state = store.getState();
      axios.post('https://projet-picky.herokuapp.com/signin', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          const { email, token, pseudo } = response.data;
          const saveUser = actionSaveUser(email, pseudo, token);
          store.dispatch(saveUser);
        })
        .catch((error) => {
          console.log(`error`, error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth