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
          const { member, token, pseudo } = response.data
          const saveUser = actionSaveUser(member, token, pseudo)
          store.dispatch(saveUser)
          console.log(response)
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
