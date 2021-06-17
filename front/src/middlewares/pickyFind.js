import axios from 'axios'; 
import { FETCH_PROGRAMS } from 'src/actions/pickyFind';

const pickyFind = (store) => (next) => (action) => {
  switch (action.type){
    case FETCH_PROGRAMS: {
      axios.get('https://projet-picky.herokuapp.com/search/har')
        .then((response) => {
          console.log('response', response.data);
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

export default pickyFind;
