// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SHOW_OR_SERIES_TO_EMOTIONS,
  BACK_TO_SHOW_OR_MOVIES,
  EMOTIONS_TO_PLATEFORMS,
  BACK_TO_EMOTIONS,
  CLICK_ON_SHOW_OR_MOVIES,
  PLATEFORMS_TO_RESULTS,
  NEW_RESEARCH,
} from 'src/actions/pickyMood';

const initialState = {
  pickyMoodShowOrSerie: true,
  pickyMoodEmotions: false,
  pickyMoodPlateforms: false,
  pickyMoodResults: false,
  ShowOrMovie: '',
  urlAxios: {},
};

const pickyMoodReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_OR_SERIES_TO_EMOTIONS:
      return {
        ...state,
        pickyMoodShowOrSerie: false,
        pickyMoodEmotions: true,
      };
    case BACK_TO_SHOW_OR_MOVIES:
      return {
        ...state,
        pickyMoodShowOrSerie: true,
        pickyMoodEmotions: false,
      };
    case EMOTIONS_TO_PLATEFORMS:
      return {
        ...state,
        pickyMoodEmotions: false,
        pickyMoodPlateforms: true,
      };
    case BACK_TO_EMOTIONS:
      return {
        ...state,
        pickyMoodEmotions: true,
        pickyMoodPlateforms: false,
      };

    case CLICK_ON_SHOW_OR_MOVIES: {
      let newState = {
        ...state,
        ShowOrMovie: action.apiNameShowOrMovie,
        urlAxios: { ...state.urlAxios, ShowOrMovie: action.apiNameShowOrMovie },
      };
      if (state.ShowOrMovie === action.apiNameShowOrMovie) {
        newState = {
          ...state,
          ShowOrMovie: '',
          urlAxios: { ...state.urlAxios, ShowOrMovie: action.apiNameShowOrMovie },
        };
      }
      return {
        ...newState,
      };
    }
    case PLATEFORMS_TO_RESULTS:
      return {
        ...state,
        pickyMoodPlateforms: false,
        pickyMoodResults: true,
      };
    case NEW_RESEARCH:
      return {
        ...state,
        pickyMoodShowOrSerie: true,
        pickyMoodResults: false,
        // TODO: Empty feelings and platforms too
        ShowOrMovie: '',
        urlAxios: {},
      };
    default:
      return state;
  }
};

export default pickyMoodReducer;
