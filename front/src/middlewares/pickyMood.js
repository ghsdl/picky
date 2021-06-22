import axios from 'axios';
import { PICKYMOOD_RESULT, saveResults } from 'src/actions/pickyMood';

const result = (store) => (next) => (action) => {
  switch (action.type){
    case PICKYMOOD_RESULT: {
      const state = store.getState()
      axios.post('https://projet-picky.herokuapp.com/moodresults', {
        ShowOrMovie: state.pickyMood.ShowOrMovie,
        emotions: state.pickyMood.emotions,
        platforms: state.pickyMood.platforms,
        
      })
        .then((response) => {
          if(response.data[0].movies) {
            let results = [];
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].movies);
            }
            store.dispatch(saveResults(results));
          } else if (response.data[0].shows) {
            let results = [];
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].shows);
            }
            store.dispatch(saveResults(results));
          }
        })
        .catch((error) => {
          console.trace(error)
        });
      break;
    }
    default:
      next(action);
  }
};

export default result;
