import axios from 'axios'; 
import { LOGIN, actionSaveUser, updateSignInError } from 'src/actions/user'
import { logout } from 'src/actions/user'
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
          setTimeout(() => {
            store.dispatch(logout()),
            window.localStorage.clear()
          }, 3600000 );
        })
        .catch((error) => {
          store.dispatch(updateSignInError(error.response.data))
          console.log(error.response.data)
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth
