import { SAVE_PICKY_DETAILS, RESET_DETAILS_CARDS } from 'src/actions/details'


const initialState = {
  program: {},
  genreDetails: '',
};

const detailsReducer = (state = initialState, action = {}) => {
  switch (action.type){
    case SAVE_PICKY_DETAILS:
      return {
        ...state, 
        program: action.program,
        genreDetails: action.genre,
      }

    case RESET_DETAILS_CARDS: 
    return {
      ...state,
      program: {},
      genreDetails: '',
    }
      default: 
        return state;
  }
};

export default detailsReducer;