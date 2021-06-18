import axios from 'axios';

import { getRandomSuccess, GET_RANDOM } from '../actions/suggestions';

const suggestions = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RANDOM: {
      axios.get('https://projet-picky.herokuapp.com/movies/random')
      .then ((response) => {
        console.log('response.data[0]', response.data[0]);
        const { movies } = response.data[0];
        console.log('movies', movies[0]);
        const movie = movies[0];
        console.log('movie', movie);
        store.dispatch(getRandomSuccess(movie));
      });
    }
    default:
      next(action);
      break;
  }
};

export default suggestions;
