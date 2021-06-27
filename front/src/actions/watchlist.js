export const ADD_REMOVE_WISH = 'ADD_REMOVE_WISH';
export const GET_BOOKMARK = 'GET_BOOKMARK';
export const GET_BOOKMARK_SUCCESS = 'GET_BOOKMARK_SUCCESS';
export const GET_BOOKMARKS_IDS = 'GET_BOOKMARKS_IDS';
export const GET_BOOKMARKS_IDS_SUCCESS = 'GET_BOOKMARKS_IDS_SUCCESS';

export const addRemoveWish = (programswish) => ({
  type: ADD_REMOVE_WISH,
  programswish,
});

export const getBookmark = () => ({
  type: GET_BOOKMARK,
});

export const getBookmarkSuccess = (wishlist) => ({
  type: GET_BOOKMARK_SUCCESS,
  wishlist,
});

export const getBookmarksIds = () => ({
  type: GET_BOOKMARKS_IDS,
})

export const getBookmarksIdsSuccess = (bookmarksIds) => ({
  type: GET_BOOKMARKS_IDS_SUCCESS,
  bookmarksIds,
});
