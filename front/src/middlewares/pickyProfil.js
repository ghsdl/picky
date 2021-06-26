import axios from 'axios'

import {successToastifyEmailPseudo, updateProfilErrorForPswd, updateProfilError, actionSaveProfil, GET_PROFIL, PATCH_PROFIL, DELETE_PROFIL, PATCH_PSWD_PROFIL } from 'src/actions/profil'
import { resetProfil } from 'src/actions/profil';
import { reset } from 'src/actions/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => {toast.success("Pseudo et/ou Email modifié !"),{
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
}}

const notifyPswd = () => {toast.success("Password modifié"),{
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }}

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
     };
     
      axios.patch('https://projet-picky.herokuapp.com/member',
        bodyParameters,
        config
      )
        .then((response) => {
         store.dispatch(reset(),resetProfil())
         notify()
         setTimeout(() => {
          window.location.reload(false)
         }, 2000);
         
         
        })
        .catch((error)=> {
          store.dispatch(updateProfilError(error.response.data))
        });
      break;
    }

    case PATCH_PSWD_PROFIL: {
      const state = store.getState();
      const config = {
        headers: {
          "Bearer": `${store.getState().status.token}`,
        }
      }
              
      const bodyParameters = {
        password: state.user.password,
        confirmationPassword: state.user.confirmationPassword,
     };
     
      axios.patch('https://projet-picky.herokuapp.com/member',
        bodyParameters,
        config
      )
        .then((response) => {
          store.dispatch(reset(),resetProfil())
          notifyPswd()
         setTimeout(() => {
          window.location.reload(false)
         }, 2000);
        })
        .catch((error)=> {

          store.dispatch(updateProfilErrorForPswd(error.response.data.error))
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