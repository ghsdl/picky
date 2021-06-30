export const GET_PICKY_DETAILS = 'GET_DETAILS'

export const getPickyDetails = (id, genre) => ({
  type: GET_PICKY_DETAILS,
  id,
  genre
})