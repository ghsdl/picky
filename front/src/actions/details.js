export const GET_PICKY_DETAILS = 'GET_PICKY_DETAILS'

export const getPickyDetails = (id, genre) => ({
  type: GET_PICKY_DETAILS,
  id,
  genre
})

export const GET_PICKY_DETAILS_WISH = 'GET_PICKY_DETAILS_WISH'
export const getPickyDetailsWish = (id, title) => ({
  type: GET_PICKY_DETAILS_WISH,
  id,
  title,
})

export const SAVE_PICKY_DETAILS = 'SAVE_PICKY_DETAILS';
export const savePickyDetails = (program, genre) => ({
  type: SAVE_PICKY_DETAILS,
  program,
  genre
})