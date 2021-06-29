import axios from 'axios';
import { PICKYMOOD_RESULT, saveResults } from 'src/actions/pickyMood';

const result = (store) => (next) => (action) => {
  switch (action.type){
    case PICKYMOOD_RESULT: {
      const state = store.getState();
      // Request for programs based on what the user chose in Picky Mood
      axios.post('https://projet-picky.herokuapp.com/moodresults', {
        ShowOrMovie: state.pickyMood.ShowOrMovie,
        emotions: state.pickyMood.emotions,
        platforms: state.pickyMood.platforms,
       
      })
        .then((response) => {
          console.log(response)
          if(response.data[0].movies) {
            // If the results are movies:
            let results = [];
            let randomResults = [];
            let newRandomResult = {};
             // All the results are put in a single array
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].movies);
            };
            if (results.length > 20) {
              // If there are more than 20 results, the results are randomized and only 20 are selected
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
              // If there are 20 results or less, they are all displayed
              store.dispatch(saveResults(results));
            }
          } else if (response.data[0].shows) {
            // If the results are shows:
            let results = [];
            let randomResults = [];
            let newRandomResult = {};
            // All the results are put in a single array
            for (let i=0; i < response.data.length; i++) {
              results = results.concat(response.data[i].shows);
            };
            if (results.length > 20) {
              // If there are more than 20 results, the results are randomized and only 20 are selected
              for(let i=0; i < 20; i++) {
                newRandomResult = results[Math.floor(Math.random()*results.length)] ;
                if (!randomResults.includes(newRandomResult)) {
                  randomResults.push(newRandomResult);
                } else {
                  i--;
                }
              };
              store.dispatch(saveResults(randomResults));
            } else {
              // If there are 20 results or less, they are all displayed
              store.dispatch(saveResults(results));
            }
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
