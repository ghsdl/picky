import {SET_PICKY_SHOW_TO_TRUE, SET_PICKY_TO_TRUE, SAVE_INFO_PICKY_LUCKY, CLEAN_UP_PICKY_LUCKY, SAVE_INFO_PICKY_LUCKY_SHOW } from 'src/actions/lucky';


const initialState = {
  lucky: false,
  luckyShow: false,
  loadingPicky: true,
  movie: [],
  shows: [],

};

const pickyLuckyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PICKY_TO_TRUE: {
      return {
        ...state, 
        lucky: true,
      }
    }
    case SET_PICKY_SHOW_TO_TRUE: {
      return {
        ...state,
        luckyShow: true
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
        shows: [],
        luckyShow: false,
      }
    }

    case SAVE_INFO_PICKY_LUCKY_SHOW: {
      return {
        ...state, 
        shows: action.show
      }
    }
    default:
      return state;
  }
};

export default pickyLuckyReducer;