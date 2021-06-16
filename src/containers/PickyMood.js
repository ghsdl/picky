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
} from 'src/actions/pickyMood';

const mapStateToProps = (state) => ({
  displayPickyMoodShowOrSerie: state.pickyMood.pickyMoodShowOrSerie,
  displayPickyMoodEmotions: state.pickyMood.pickyMoodEmotions,
  displayPickyMoodPlateforms: state.pickyMood.pickyMoodPlateforms,
  displayPickyMoodResults: state.pickyMood.pickyMoodResults,
  ShowOrMovie: state.pickyMood.ShowOrMovie,
  movieEmotions: state.pickyMood.movieEmotions,
  platforms: state.pickyMood.platforms,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PickyMood);
