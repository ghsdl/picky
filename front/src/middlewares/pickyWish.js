import axios from 'axios';
import { ADD_REMOVE_WISH, GET_BOOKMARK, getBookmark, getBookmarkSuccess} from 'src/actions/watchlist';

const pickyWish = (store) => (next) => (action) => {
  switch (action.type){
    case ADD_REMOVE_WISH: {

    }
    case GET_BOOKMARK: {
      const state = store.getState().status.token;
      const getBookmarkRequest = {
        method: 'get',
        url: 'https://projet-picky.herokuapp.com/bookmark',
        headers: {
          Authorization: `Bearer ${state.user.token}`,
      },
    };

    axios(getBookmarkRequest)
    .then ((response) => {
      store.dispatch(getBookmarkSuccess(response.data.wish));
    });
    break;
  }
  default:
    next(action);
    break;
  }
};

export default pickyWish;
