export const SHOW_OR_SERIES_TO_EMOTIONS = 'SHOW_OR_SERIES_TO_EMOTIONS';
export const BACK_TO_SHOW_OR_MOVIES = 'BACK_TO_SHOW_OR_MOVIES';
export const EMOTIONS_TO_PLATEFORMS = 'EMOTIONS_TO_PLATEFORMS';
export const BACK_TO_EMOTIONS = 'BACK_TO_EMOTIONS';
export const CLICK_ON_SHOW_OR_MOVIES = 'CLICK_ON_SHOW_OR_MOVIES';
export const CLICK_ON_EMOTIONS_MOVIE = 'CLICK_ON_EMOTIONS_MOVIE';
export const PLATEFORMS_TO_RESULTS = 'PLATEFORMS_TO_RESULTS';
export const NEW_RESEARCH = 'NEW_RESEARCH';
export const CLICK_ON_EMOTIONS_SHOW = 'CLICK_ON_EMOTIONS_SHOW';
export const CLICK_ON_PLATEFORM = 'CLICK_ON_PLATEFORM';
export const PICKYMOOD_RESULT = 'PICKYMOOD_RESULT';
export const RESET = 'RESET';

export const showOrSeriesToEmotions = () => ({
  type: SHOW_OR_SERIES_TO_EMOTIONS,
});

export const backToShowOrMovies = () => ({
  type: BACK_TO_SHOW_OR_MOVIES,
});

export const emotionsToPlateforms = () => ({
  type: EMOTIONS_TO_PLATEFORMS,
});

export const backToEmotions = () => ({
  type: BACK_TO_EMOTIONS,
});

export const clickOnShowOrMovies = (apiNameShowOrMovie) => ({
  type: CLICK_ON_SHOW_OR_MOVIES,
  apiNameShowOrMovie,
});

export const clickOnEmotionsMovie = (emotionsMoviesGenre) => ({
  type: CLICK_ON_EMOTIONS_MOVIE,
  emotionsMoviesGenre,
});

export const clickOnEmotionsShows = (emotionsShowGenre) => ({
  type: CLICK_ON_EMOTIONS_SHOW,
  emotionsShowGenre,
});

export const clickOnPlateform = (plateformID) => ({
  type: CLICK_ON_PLATEFORM,
  plateformID,
});

export const plateformsToResults = () => ({
  type: PLATEFORMS_TO_RESULTS,
});

export const newResearch = () => ({
  type: NEW_RESEARCH,
});

export const pickyMoodResult = () => ({
  type: PICKYMOOD_RESULT,
});

export const reset = () => ({
  type: RESET,
});
