import axios from 'axios'; 
import { FETCH_PROGRAMS, savePrograms } from 'src/actions/pickyFind';

const pickyFind = (store) => (next) => (action) => {
  switch (action.type){
   case FETCH_PROGRAMS: {
    axios.get('https://projet-picky.herokuapp.com/search/movies/har')
      .then((response) => {
        //console.log('response.data[0] for movies request', response.data[0]);
        const { movies } = response.data[0];
        //console.log('movies in middleware', movies);
          axios.get('https://projet-picky.herokuapp.com/search/shows/har')
            .then((response) => {
              //console.log('response.data[0] for shows request', response.data[0]);
              const { shows } = response.data[0];
              //console.log('shows in middleware', shows);
              store.dispatch(savePrograms(movies, shows));
            })
            .catch((error) => {
              console.log(`error`, error)
            });
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
