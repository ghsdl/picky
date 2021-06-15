export const SHOW_OR_SERIES_TO_EMOTIONS = 'SHOW_OR_SERIES_TO_EMOTIONS';
export const BACK_TO_SHOW_OR_MOVIES = 'BACK_TO_SHOW_OR_MOVIES';
export const EMOTIONS_TO_PLATEFORMS = 'EMOTIONS_TO_PLATEFORMS';
export const BACK_TO_EMOTIONS = 'BACK_TO_EMOTIONS';
export const CLICK_ON_SHOW_OR_MOVIES = 'CLICK_ON_SHOW_OR_MOVIES';
export const PLATEFORMS_TO_RESULTS = 'PLATEFORMS_TO_RESULTS';
export const NEW_RESEARCH = 'NEW_RESEARCH';

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

export const plateformsToResults = () => ({
  type: PLATEFORMS_TO_RESULTS,
});

export const newResearch = () => ({
  type: NEW_RESEARCH,
});
