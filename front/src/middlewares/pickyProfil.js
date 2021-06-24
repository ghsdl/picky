import axios from 'axios'

import {actionSaveProfil, GET_PROFIL, PATCH_PROFIL, DELETE_PROFIL } from 'src/actions/profil'


const profil =  (store) => (next) => (action) => {
  
  switch (action.type){
    case GET_PROFIL: {
      const state = store.getState();
      console.log(state.user.email)
      axios.get('https://projet-picky.herokuapp.com/member', {
        headers: {
          "Bearer": `${store.getState().status.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        
      })
        .then((response) => {
          console.log(response)
          const { member , pseudo } = response.data
          const saveProfil = actionSaveProfil(member, pseudo);
          store.dispatch(saveProfil)
        })
        .catch((error)=> {
          console.log(error)
        });
      break;
    }

    case PATCH_PROFIL: {
      console.log(action)
      const state = store.getState();
      const config = {
        headers: {
          "Bearer": `${store.getState().status.token}`,
        }
      }
      
      const email = !state.user.email ? state.profil.member : state.user.email
      const pseudo = !state.user.pseudo ? state.profil.pseudo : state.user.pseudo;
            
      const bodyParameters = {
        pseudo: pseudo,
        email: email,
        password: state.user.password,
     };
     
      axios.patch('https://projet-picky.herokuapp.com/member',
        bodyParameters,
        config
      )
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
          "Bearer": `${store.getState().status.token}`
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