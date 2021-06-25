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
      const getBookmarkRequest = {
        method: 'get',
        url: 'https://projet-picky.herokuapp.com/bookmark',
        config
    };

    axios(getBookmarkRequest)
    .then ((response) => {
      const bookmarks = response.data.bookmark;

      const bookmarksTransformed = [];

      bookmarks.forEach((bookmark) => {
        const bookmarkTransformed = {id: bookmark.id, betaseries_id: bookmark.betaseries_id, title: bookmark.title, poster: bookmark.poster, platforms: []};
        const platform = `"${bookmark.platform}"`;
        const replacedPlatform1 = platform.replaceAll(`","`, `,`);
        const replacedPlatform2 = replacedPlatform1.replace(`{"{`, `[{`);
        const replacedPlatform3 = replacedPlatform2.replace(`}"}`, `}]`);
        const replacedPlatform4 = replacedPlatform3.replace(`{}`, `[]`);
        const parsedPlatform = JSON.parse(replacedPlatform4);
        const parsedTwicePlatform = JSON.parse(parsedPlatform);

        bookmarkTransformed.platforms = parsedTwicePlatform;

        bookmarksTransformed.push(bookmarkTransformed);
      });

      store.dispatch(getBookmarkSuccess(bookmarksTransformed));
    });
    break;
  }
  default:
    next(action);
    break;
  }
};

export default pickyWish;
