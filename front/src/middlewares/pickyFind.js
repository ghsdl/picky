import axios from 'axios'; 
import { FETCH_PROGRAMS, savePrograms } from 'src/actions/pickyFind';

const pickyFind = (store) => (next) => (action) => {
  switch (action.type){
   case FETCH_PROGRAMS: {
     const searchInput = store.getState().search.searchInputValue;
    axios.get(`https://projet-picky.herokuapp.com/search/movies/${searchInput}`)
      .then((response) => {
        const { movies } = response.data[0];
          axios.get(`https://projet-picky.herokuapp.com/search/shows/${searchInput}`)
            .then((response) => {
              const { shows } = response.data[0];
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
