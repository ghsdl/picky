import axios from 'axios'

import { GET_PROFIL, PATCH_PROFIL, DELETE_PROFIL } from 'src/actions/profil'


const profil =  (store) => (next) => (action) => {
  
  switch (action.type){
    case GET_PROFIL: {
      console.log(store.getState().status.token)
      axios.get('https://projet-picky.herokuapp.com/member', {
        headers: {
          "Bearer": `${store.getState().status.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error)=> {
          console.log(error)
        });
      break;
    }

    case PATCH_PROFIL: {
      const config = {
        header: {
          "Bearer": `${store.getState().status.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      }
      axios.patch('https://projet-picky.herokuapp.com/member', {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        config
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error)=> {
          console.log('case Patch MiddleWare',error)
        });
      break;
    }

    case DELETE_PROFIL: {
      console.log(store.getState().status.token)
      axios.delete('https://projet-picky.herokuapp.com/member', {
        headers: {
          "Bearer": `${store.getState().status.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        
      })
        .then((response) => {
          console.log('case Delete MiddleWare',response)
        })
        .catch((error)=> {
          console.log(error)
        });
      break;
    }
    default:
      next(action);
  }
}

export default profil;