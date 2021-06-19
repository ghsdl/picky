import axios from 'axios';
import { PICKYMOOD_RESULT } from 'src/actions/pickyMood';

const result = (store) => (next) => (action) => {
  switch (action.type){
    case PICKYMOOD_RESULT: {
      const state = store.getState()
      axios.post('https://projet-picky.herokuapp.com/moodresults', {
        urlAxios: state.pickyMood.urlAxios
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        });
      break;
    }
    default:
      next(action);  
  }
};

export default result;
