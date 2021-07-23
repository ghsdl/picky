import { CHECK_TOKEN } from 'src/actions/profil'
import jwt_decode from 'jwt-decode'
import { logout } from 'src/actions/user';
const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  const token = store.getState().status.token;
  

  switch(action.type){
    case CHECK_TOKEN: {
      
      if ( token && jwt_decode(token).exp < Date.now() / 1000) {
        
        const action = logout();
        store.dispatch(action)
        window.localStorage.clear();
      }
      break;
    }
    default:
      next(action);
  }
  
};

export default checkTokenExpirationMiddleware