import { SET_PICKY_TO_TRUE, SAVE_INFO_PICKY_LUCKY, CLEAN_UP_PICKY_LUCKY } from 'src/actions/lucky';


const initialState = {
  lucky: false,
  loadingPicky: true,
  movie: [],
};

const pickyLuckyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PICKY_TO_TRUE: {
      return {
        ...state, 
        lucky: true,
      }
    }
    case SAVE_INFO_PICKY_LUCKY: {
      return {
        ...state, 
        movie: action.movie
      }
    }

    case CLEAN_UP_PICKY_LUCKY: {
      return {
        ...state, 
        lucky: false,
        loadingPicky: true,
        movie: [],
      }
    }
    default:
      return state;
  }
};

export default pickyLuckyReducer;