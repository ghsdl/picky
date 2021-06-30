export const GET_PICKY_DETAILS = 'GET_DETAILS'

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