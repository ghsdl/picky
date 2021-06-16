export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  key,
});
