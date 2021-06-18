import axios from 'axios';

import { getMovieSuccess, getSerieSuccess } from 'src/actions/suggestions';

const suggestions = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RANDOM_MOVIE:
      axios.get('https://projet-picky.herokuapp.com/movies/random')
      .then ((response) => {
        console.log(response);
        store.dispatch(getMovieSuccess(response.data));
      });

    next(action);
    break;
    case GET_RANDOM_SERIE: {
      axios.get('https://projet-picky.herokuapp.com/shows/random')
      .then ((responsebis) => {
        console.log(responsebis);
        store.dispatch(getSerieSuccess(responsebis.data));
      });
    }
    default:
      next(action);
      break;
  }
};

export default suggestions;
