import { SAVE_PICKY_DETAILS } from 'src/actions/details'


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
      default: 
        return state;
  }
};

export default detailsReducer;