import axios from 'axios';
import { addRemoveWish, ADD_REMOVE_WISH, GET_BOOKMARK, getBookmarkSuccess, getBookmark} from 'src/actions/watchlist';

const pickyWish = (store) => (next) => (action) => {
  switch (action.type){
    case ADD_REMOVE_WISH: {
        console.log('action.programswish in middleware', action.programswish);
        /*
        const addRequest = {
          method: 'post',
          url: 'https://projet-picky.herokuapp.com/bookmark',
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        };
        */
        axios.post('https://projet-picky.herokuapp.com/bookmark', {
          betaseries_id: action.programswish.id,
          poster: action.programswish.poster,
          platform: action.programswish.svods,
          title: action.programswish.title,
          // créer objet config avec headerssssssssssssssssssssssssssssssss
          headers: { 
            "Bearer": `${store.getState().status.token}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          },
          )
          .then((response) => {
            console.log(response.data);
            //store.dispatch(addRequest(response.data))
            //store.dispatch(addRemoveWish(programswish));
          });
        break;
    }
    case GET_BOOKMARK: {
      console.log('token in pickywish get_bookmark middleware', token);
      const getBookmarkRequest = {
        method: 'get',
        url: 'https://projet-picky.herokuapp.com/member/bookmark',
        headers: { 
          "Bearer": `${store.getState().status.token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
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
