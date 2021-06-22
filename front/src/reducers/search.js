// eslint-disable-next-line import/no-extraneous-dependencies
import { CHANGE_SEARCH_INPUT } from 'src/actions/search';
import { RESET } from 'src/actions/suggestions';

export const initialState = {
  searchInputValue: '',
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // When the user types something in the searchbar, the content is updated
    // so it can display on the page as they type
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        searchInputValue: action.newValue,
      };

    case RESET: 
      return {
        ...state, 
        searchInputValue: '',
      }
    default:
      return state;
  }
};

export default searchReducer;
