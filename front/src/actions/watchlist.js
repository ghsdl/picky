export const ADD_TO_WISH = 'ADD_TO_WISH';
export const REMOVE_FROM_WISH = 'REMOVE_FROM_WISH';

export const addToWish = (itemID) => {
  return {
    type: ADD_TO_WISH,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromWish = (itemID) => {
  return {
    type: REMOVE_FROM_WISH,
    payload: {
      id: itemID,
    },
  };
};
