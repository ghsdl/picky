import axios from 'axios';
import { ADD_TO_WISH, addToWish, REMOVE_FROM_WISH, removeFromWish } from 'src/actions/watchlist';

const pickyWish = (store) => (next) => (action) => {
  switch (action.type){
    case ADD_TO_WISH: {
      const state = store.getState();
      const getWatchlist = {
        method: 'get',
        url: 'https://projet-picky.herokuapp.com/bookmark',
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(getWatchlist)
      .then((response) => {
        store.dispatch(addToWish(response.data.wish));
      });
      break;
    }
    case REMOVE_FROM_WISH: {
      const state = store.getState();
      const removeWatchlist = {
        method: 'delete',
        url: 'https://projet-picky.herokuapp.com/bookmark',
        headers: {
          Authorization: `Bearer ${state.user.token}`,
      },
    };

    axios(removeWatchlist)
    .then ((response) => {
      store.dispatch(removeFromWish(response.data.wish));
    });
    break;
  }
  default:
    next(action);
    break;
  }
};

export default pickyWish;
