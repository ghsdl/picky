import { CHANGE_SEARCH_INPUT } from 'src/actions/search';

export const initialState = {
  searchInputValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      console.log(state.searchInputValue);
      return {
        ...state,
        searchInputValue: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
