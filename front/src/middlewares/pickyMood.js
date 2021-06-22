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
            let randomResults = [];
            let newRandomResult = {};
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].movies);
            };
            if (results.length > 20) {
              for(let i=0; i < 20; i++) {
                newRandomResult = results[Math.floor(Math.random()*results.length)];
                if (!randomResults.includes(newRandomResult)) {
                  randomResults.push(newRandomResult);
                } else {
                  i--;
                }
              };
              store.dispatch(saveResults(randomResults));
            } else {
              store.dispatch(saveResults(results));
            }
          } else if (response.data[0].shows) {
            let results = [];
            let randomResults = [];
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].shows);
            };
            for(let i=0; i < 20; i++) {
              randomResults.push(results[Math.floor(Math.random()*results.length)]);
            };
            store.dispatch(saveResults(randomResults));
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
