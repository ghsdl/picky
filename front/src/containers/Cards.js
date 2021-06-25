import { connect } from 'react-redux';
import Cards from 'src/components/Cards';
import { addRemoveWish } from 'src/actions/watchlist';

const mapStateToProps = (state) => (
  {
  movies: state.pickyFind.movies,
  shows: state.pickyFind.shows,
  loadingPlatforms: state.platforms.loadingPlatforms,
  programswish: state.watchlist.programswish,
  results: state.pickyMood.results,
  wish: state.watchlist.wish,
});

const mapDispatchToProps = (dispatch) => ({
    addRemoveWish: (programswish) => dispatch(addRemoveWish(programswish)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
