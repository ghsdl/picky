import { CHANGE_SEARCH_INPUT } from 'src/actions/search';

export const initialState = {
  searchInputValue: '',
  isEmpty: true,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        searchInputValue: action.newValue,
        isEmpty: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
