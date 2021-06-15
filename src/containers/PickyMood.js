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
} from 'src/actions/pickyMood';

const mapStateToProps = (state) => ({
  displayPickyMoodShowOrSerie: state.pickyMood.pickyMoodShowOrSerie,
  displayPickyMoodEmotions: state.pickyMood.pickyMoodEmotions,
  displayPickyMoodPlateforms: state.pickyMood.pickyMoodPlateforms,
  ShowOrMovie: state.pickyMood.ShowOrMovie,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PickyMood);
