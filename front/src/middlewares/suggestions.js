import axios from 'axios';

import { getRandomSuccess, GET_RANDOM } from '../actions/suggestions';

const suggestions = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RANDOM: {
      axios.get('https://projet-picky.herokuapp.com/movies/random')
      .then ((response) => {
        const { movies } = response.data[0];
        const movie = movies[0];
      axios.get('https://projet-picky.herokuapp.com/shows/random')
      .then ((response) => {
        const { shows } = response.data[0];
        const show = shows[0];
        store.dispatch(getRandomSuccess(movie, show));
      })
      .catch((error) => {
        console.log(error)
      });
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

export default suggestions;
