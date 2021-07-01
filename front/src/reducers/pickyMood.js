// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SHOW_OR_SERIES_TO_EMOTIONS,
  BACK_TO_SHOW_OR_MOVIES,
  EMOTIONS_TO_PLATEFORMS,
  BACK_TO_EMOTIONS,
  CLICK_ON_SHOW_OR_MOVIES,
  CLICK_ON_EMOTIONS_MOVIE,
  PLATEFORMS_TO_RESULTS,
  NEW_RESEARCH,
  CLICK_ON_EMOTIONS_SHOW,
  CLICK_ON_PLATEFORM,
  RESET,
  SAVE_RESULTS,
  CHANGE_STATE,
} from 'src/actions/pickyMood';

const initialState = {
  pickyMoodShowOrSerie: true,
  pickyMoodEmotions: false,
  pickyMoodPlateforms: false,
  pickyMoodResults: false,
  ShowOrMovie: '',
  urlAxios: {},
  emotions: [],
  platforms: [],
  results: [],
  loading: true,
  genre: '',
  
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
        emotions: [],
      };
      if (state.ShowOrMovie === action.apiNameShowOrMovie) {
        newState = {
          ...state,
          ShowOrMovie: '',
          urlAxios: { ...state.urlAxios, ShowOrMovie: '' },
          emotions: [],
        };
      }
      return {
        ...newState,
      };
    }

    case CLICK_ON_EMOTIONS_MOVIE: {
      let newState = {
        ...state,
        emotions: state.emotions,
        urlAxios: {
          ...state.urlAxios,
          emotions: state.emotions,
        },
      };
      if (state.emotions.includes(action.emotionsMoviesGenre)) {
        // On le supprime
        state.emotions.forEach((emotions) => {
          if (emotions === action.emotionsMoviesGenre) {
            const indexOfEmotion = state.emotions.indexOf(emotions);
            newState.emotions.splice(indexOfEmotion, 1);
            newState = {
              ...state,
              emotions: [...state.emotions],
              urlAxios: {
                ...state.urlAxios,
                emotions: [...state.emotions],
              },
            };
          }
        });
      }
      else {
        // On l'ajoute
        newState = {
          ...state,
          emotions: [...state.emotions, action.emotionsMoviesGenre],
          urlAxios: {
            ...state.urlAxios,
            emotions: [...state.emotions, action.emotionsMoviesGenre],
          },
        };
      }

      return {
        ...newState,
      };
    }

    case CLICK_ON_EMOTIONS_SHOW: {
      let newState = {
        ...state,
        emotions: state.emotions,
        urlAxios: {
          ...state.urlAxios,
          emotions: state.emotions,
        },
      };
      if (state.emotions.includes(action.emotionsShowGenre)) {
        // On le supprime
        state.emotions.forEach((emotions) => {
          if (emotions === action.emotionsShowGenre) {
            const indexOfEmotion = state.emotions.indexOf(emotions);
            newState.emotions.splice(indexOfEmotion, 1);
            newState = {
              ...state,
              emotions: [...state.emotions],
              urlAxios: {
                ...state.urlAxios,
                emotions: [...state.emotions],
              },
            };
          }
        });
      }
      else {
        // On l'ajoute
        newState = {
          ...state,
          emotions: [...state.emotions, action.emotionsShowGenre],
          urlAxios: {
            ...state.urlAxios,
            emotions: [...state.emotions, action.emotionsShowGenre],
          },
        };
      }
      return {
        ...newState,
      };
    }

    case CLICK_ON_PLATEFORM: {
      let newState = {
        ...state,
        platforms: state.platforms,
        urlAxios: {
          ...state.urlAxios,
          platforms: state.platforms,
        },
      };
      if (state.platforms.includes(action.plateformID)) {
        // On le supprime
        state.platforms.forEach((platform) => {
          if (platform === action.plateformID) {
            const indexOfPlatform = state.platforms.indexOf(platform);
            newState.platforms.splice(indexOfPlatform, 1);
            newState = {
              ...state,
              platforms: [...state.platforms],
              urlAxios: {
                ...state.urlAxios,
                platforms: [...state.platforms],
              },
            };
          }
        });
      }
      else {
        // On l'ajoute
        newState = {
          ...state,
          platforms: [...state.platforms, action.plateformID],
          urlAxios: {
            ...state.urlAxios,
            platforms: [...state.platforms, action.plateformID],
          },
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
        ShowOrMovie: '',
        urlAxios: {},
        emotions: [],
        platforms: [],
      };

    case RESET: {
      return {
        ...state,
        pickyMoodShowOrSerie: true,
        pickyMoodEmotions: false,
        pickyMoodPlateforms: false,
        pickyMoodResults: false,
        ShowOrMovie: '',
        urlAxios: {},
        emotions: [],
        platforms: [],
      }
    };

    case SAVE_RESULTS: {
      return {
          ...state,
        results: action.results,
        genre: action.genre,
        loading: false,
      };
    };
    case CHANGE_STATE: {
      return {
        ...state,
        results: [],
        loading: true,
      }
    }
    default:
      return state;
  }
};

export default pickyMoodReducer;
