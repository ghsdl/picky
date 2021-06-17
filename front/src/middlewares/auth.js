import axios from 'axios'; 
import { LOGIN } from 'src/actions/user'

const auth = (store) => (next) => (action) => {
  switch (action.type){
    case LOGIN: {
      const state = store.getState();
      axios.post('https://projet-picky.herokuapp.com/signIn', {
        email: state.user.email,
        password: state.user.password
      })
        .then((response) => {
          const { member, token } = response.data
          const actionSaveUser = saveUser(member, token)
          store.dispatch(actionSaveUser)
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

export default auth