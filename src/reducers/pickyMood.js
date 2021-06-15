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
} from 'src/actions/pickyMood';

const initialState = {
  pickyMoodShowOrSerie: true,
  pickyMoodEmotions: false,
  pickyMoodPlateforms: false,
  pickyMoodResults: false,
  ShowOrMovie: '',
  urlAxios: {},
  movieEmotions: [],
  platforms: [],
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
        movieEmotions: [],
      };
      if (state.ShowOrMovie === action.apiNameShowOrMovie) {
        newState = {
          ...state,
          ShowOrMovie: '',
          urlAxios: { ...state.urlAxios, ShowOrMovie: '' },
          movieEmotions: [],
        };
      }
      return {
        ...newState,
      };
    }

    case CLICK_ON_EMOTIONS_MOVIE: {
      let newState = {
        ...state,
        movieEmotions: state.movieEmotions,
        urlAxios: {
          ...state.urlAxios,
          movieEmotions: state.movieEmotions,
        },
      };
      if (state.movieEmotions.includes(action.emotionsMoviesGenre)) {
        // On le supprime
        state.movieEmotions.forEach((movieEmotion) => {
          if (movieEmotion === action.emotionsMoviesGenre) {
            const indexOfEmotion = state.movieEmotions.indexOf(movieEmotion);
            newState.movieEmotions.splice(indexOfEmotion, 1);
          }
        });
      }
      else {
        // On l'ajoute
        newState = {
          ...state,
          movieEmotions: [...state.movieEmotions, action.emotionsMoviesGenre],
          urlAxios: {
            ...state.urlAxios,
            movieEmotions: [...state.movieEmotions, action.emotionsMoviesGenre],
          },
        };
        console.log('newState after change: ', newState);
      }

      return {
        ...newState,
      };
    }

    case CLICK_ON_EMOTIONS_SHOW: {
      let newState = {
        ...state,
        movieEmotions: state.movieEmotions,
        urlAxios: {
          ...state.urlAxios,
          movieEmotions: state.movieEmotions,
        },
      };
      if (state.movieEmotions.includes(action.emotionsShowGenre)) {
        // On le supprime
        state.movieEmotions.forEach((movieEmotion) => {
          if (movieEmotion === action.emotionsShowGenre) {
            const indexOfEmotion = state.movieEmotions.indexOf(movieEmotion);
            newState.movieEmotions.splice(indexOfEmotion, 1);
          }
        });
      }
      else {
        // On l'ajoute
        newState = {
          ...state,
          movieEmotions: [...state.movieEmotions, action.emotionsShowGenre],
          urlAxios: {
            ...state.urlAxios,
            movieEmotions: [...state.movieEmotions, action.emotionsShowGenre],
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
            const indexOfEmotion = state.platforms.indexOf(platform);
            newState.platforms.splice(indexOfEmotion, 1);
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
            movieEmotions: [...state.platforms, action.plateformID],
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
        // TODO: Empty feelings and platforms too
        ShowOrMovie: '',
        urlAxios: {},
        movieEmotions: [],
      };
    default:
      return state;
  }
};

export default pickyMoodReducer;
