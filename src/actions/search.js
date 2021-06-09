export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';

export const changeSearchInput = (newValue) => (
  {
    type: CHANGE_SEARCH_INPUT,
    newValue,
  }
);
