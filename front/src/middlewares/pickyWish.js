import axios from 'axios';
import { ADD_TO_WISH, REMOVE_FROM_WISH, GET_BOOKMARK, GET_BOOKMARKS_IDS, getBookmarkSuccess, getBookmarksIdsSuccess, getBookmarksIds, getBookmark } from 'src/actions/watchlist';

const pickyWish = (store) => (next) => (action) => {
  const config = {
    headers: { 
      "Bearer": `${store.getState().status.token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  switch (action.type){
    case ADD_TO_WISH: {
        // We get all the information from the programs in the watchlist
        const bodyParameters = {
          betaseries_id: action.programswish.id,
          poster: action.programswish.poster,
          platform: action.programswish.svods,
          title: action.programswish.title,
        };
        
        // Adds the program to the watchlist with every information needed
        axios.post('https://projet-picky.herokuapp.com/bookmark',
          bodyParameters,
          configs
          )
          .then(() => {
            store.dispatch(getBookmarksIds());
            store.dispatch(getBookmark());
          });
        break;
    };

    case REMOVE_FROM_WISH: {
      const programId = action.programId;
      
      // Deletes the program from the watchlist thanks to its ID
      axios.delete(`https://projet-picky.herokuapp.com/bookmark/${programId}`,
        config
        )
        .then(() => {
          store.dispatch(getBookmarksIds());
          store.dispatch(getBookmark());
        });
      break;
    }

    case GET_BOOKMARK: {
    axios.get('https://projet-picky.herokuapp.com/member/bookmark',
    config)
    .then ((response) => {
      // Gets all the programs that are currently in the watchlist
      const bookmarks = response.data.data;

      // Creates a new empty array for all the programs in the watchlist
      const bookmarksTransformed = [];

      if (bookmarks !== null) {
        bookmarks.forEach((bookmark) => {
          // For each program, a new object is created with all the information
          const bookmarkTransformed = {id: bookmark.id, betaseries_id: bookmark.betaseries_id, title: bookmark.title, poster: bookmark.poster, platforms: []};
          // The platforms from the database are transformed to an array
          const platform = `"${bookmark.platform}"`;
          const replacedPlatform1 = platform.replaceAll(`","`, `,`);
          const replacedPlatform2 = replacedPlatform1.replace(`{"{`, `[{`);
          const replacedPlatform3 = replacedPlatform2.replace(`}"}`, `}]`);
          const replacedPlatform4 = replacedPlatform3.replace(`{}`, `[]`);
          const parsedPlatform = JSON.parse(replacedPlatform4);
          const parsedTwicePlatform = JSON.parse(parsedPlatform);
  
          bookmarkTransformed.platforms = parsedTwicePlatform;
          
          // The program is added to the watchlist array
          bookmarksTransformed.push(bookmarkTransformed);
        });
      }

      // The watchlist is sent to be displayed
      store.dispatch(getBookmarkSuccess(bookmarksTransformed));
    });
    break;
  };

  case GET_BOOKMARKS_IDS: {
      axios.get('https://projet-picky.herokuapp.com/member/bookmark',
    config)
    .then ((response) => {
      // Gets all the programs that are currently in the watchlist
      const bookmarks = response.data.data;

      // An empty array to put all the ids of the programs in the watchlist is created
      const bookmarksIds = [];

      if(bookmarks !== null) {
        bookmarks.forEach((bookmark) => {
          // For each program in the watchlist, we get its ID
          const bookmarkId = bookmark.betaseries_id;
          // And add it to the array
          bookmarksIds.push(bookmarkId);
        });
      }

      // The array of ids is sent
      store.dispatch(getBookmarksIdsSuccess(bookmarksIds));
    });
    break;
  }
  default:
    next(action);
    break;
  }
};

export default pickyWish;
