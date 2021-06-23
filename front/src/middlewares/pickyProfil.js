import axios from 'axios'

import { GET_PROFIL } from 'src/actions/profil'

const profil =  (store) => (next) => (action) => {
  switch (action.type){
    case GET_PROFIL: {
      axios.get('https://projet-picky.herokuapp.com/member/id',{
        header: {
          Authorization: `${store.getState().status.token}`
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