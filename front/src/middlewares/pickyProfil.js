import axios from 'axios'

import { GET_PROFIL } from 'src/actions/profil'


const profil =  (store) => (next) => (action) => {
  
  switch (action.type){
    case GET_PROFIL: {
      console.log(store.getState().status.token)
      axios.get('https://projet-picky.herokuapp.com/member', {
        header: {
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
    default:
      next(action);
  }
}

export default profil;