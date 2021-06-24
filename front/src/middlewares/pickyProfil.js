import axios from 'axios'

import { GET_PROFIL } from 'src/actions/profil'


const profil =  (store) => (next) => (action) => {
  console.log(store.getState().status.token)
  switch (action.type){
    case GET_PROFIL: {
      axios.get('https://projet-picky.herokuapp.com/member/id',{
        header: {
          Authorization: ` Bearer ${store.getState().status.token}`
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