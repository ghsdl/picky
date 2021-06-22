import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PickyMood from 'src/components/PickyMood';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  showOrSeriesToEmotions,
  backToShowOrMovies,
  emotionsToPlateforms,
  backToEmotions,
  clickOnShowOrMovies,
  clickOnEmotionsMovie,
  plateformsToResults,
  newResearch,
  clickOnEmotionsShows,
  clickOnPlateform,
  pickyMoodResult,
} from 'src/actions/pickyMood';

const mapStateToProps = (state) => ({
  displayPickyMoodShowOrSerie: state.pickyMood.pickyMoodShowOrSerie,
  displayPickyMoodEmotions: state.pickyMood.pickyMoodEmotions,
  displayPickyMoodPlateforms: state.pickyMood.pickyMoodPlateforms,
  displayPickyMoodResults: state.pickyMood.pickyMoodResults,
  ShowOrMovie: state.pickyMood.ShowOrMovie,
  emotions: state.pickyMood.emotions,
  platforms: state.pickyMood.platforms,
  urlAxios: state.pickyMood.urlAxios,
  loading: state.pickyMood.loading,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisplayPickyMoodEmotions: () => {
    dispatch(showOrSeriesToEmotions());
  },
  backToShowOrMovies: () => {
    dispatch(backToShowOrMovies());
  },

  handleDisplayPickyMoodPlateforms: () => {
    dispatch(emotionsToPlateforms());
  },

  backToEmotions: () => {
    dispatch(backToEmotions());
  },

  onClickShowOrMovies: (apiNameShowOrMovie) => {
    const action = clickOnShowOrMovies(apiNameShowOrMovie);
    dispatch(action);
  },

  onClickEmotionsShows: (emotionsShowGenre) => {
    const action = clickOnEmotionsShows(emotionsShowGenre);
    dispatch(action);
  },

  onClickEmotionsMovie: (emotionsMoviesGenre) => {
    const action = clickOnEmotionsMovie(emotionsMoviesGenre);
    dispatch(action);
  },

  onClickPlateform: (plateformID) => {
    const action = clickOnPlateform(plateformID);
    dispatch(action);
  },

  handleDisplayPickyMoodResults: () => {
    dispatch(plateformsToResults());
  },

  newResearch: () => {
    dispatch(newResearch());
  },

  lookForPickyMoodResult: () => {
    dispatch(pickyMoodResult());
    //console.log(urlAxios)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PickyMood);
