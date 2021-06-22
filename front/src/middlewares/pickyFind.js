import axios from 'axios'; 
import { FETCH_PROGRAMS, savePrograms } from 'src/actions/pickyFind';

const pickyFind = (store) => (next) => (action) => {
  switch (action.type){
   case FETCH_PROGRAMS: {
     // Firt request for movies based on what the user has typed in the searchbar
     const searchInput = store.getState().search.searchInputValue;
    axios.get(`https://projet-picky.herokuapp.com/search/movies/${searchInput}`)
      .then((response) => {
        const { movies } = response.data[0];
        // If the first request worked, second request for shows base on what the user has typed
          axios.get(`https://projet-picky.herokuapp.com/search/shows/${searchInput}`)
            .then((response) => {
              const { shows } = response.data[0];
              // Movies and shows are sent to be displayed
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
