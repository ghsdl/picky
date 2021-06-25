import axios from 'axios';
import { addRemoveWish, ADD_REMOVE_WISH, GET_BOOKMARK, getBookmarkSuccess, getBookmark} from 'src/actions/watchlist';

const pickyWish = (store) => (next) => (action) => {
  const config = {
    headers: { 
      "Bearer": `${store.getState().status.token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  switch (action.type){
    case ADD_REMOVE_WISH: {
        console.log('action.programswish in middleware', action.programswish);
        console.log('token in pickyWish middleware', store.getState().status.token);

        const bodyParameters = {
          betaseries_id: action.programswish.id,
          poster: action.programswish.poster,
          platform: action.programswish.svods,
          title: action.programswish.title,
        };
        /*
        const addRequest = {
          method: 'post',
          url: 'https://projet-picky.herokuapp.com/bookmark',
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        };
        */
        axios.post('https://projet-picky.herokuapp.com/bookmark',
          bodyParameters,
          // créer objet config avec headerssssssssssssssssssssssssssssssss
          config
          )
          .then((response) => {
            console.log(response.data);
            //store.dispatch(addRequest(response.data))
            //store.dispatch(addRemoveWish(programswish));
          });
        break;
    }
    case GET_BOOKMARK: {
      console.log('config in getbookmark middleware', config);
      const getBookmarkRequest = {
        method: 'get',
        url: 'https://projet-picky.herokuapp.com/bookmark',
        config
    };

    axios(getBookmarkRequest)
    .then ((response) => {
      console.log('response for getbookmark in middleware', response.data.bookmark);
      const bookmark = response.data.bookmark;
      store.dispatch(getBookmarkSuccess(bookmark));
    });
    break;
  }
  default:
    next(action);
    break;
  }
};

export default pickyWish;
