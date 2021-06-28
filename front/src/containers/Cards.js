import { connect } from 'react-redux';
import Cards from 'src/components/Cards';
import { addRemoveWish, getBookmarksIds } from 'src/actions/watchlist';

const mapStateToProps = (state) => (
  {
  movies: state.pickyFind.movies,
  shows: state.pickyFind.shows,
  loadingPlatforms: state.platforms.loadingPlatforms,
  programswish: state.watchlist.programswish,
  results: state.pickyMood.results,
  wish: state.watchlist.wish,
  wishIds: state.watchlist.wishIds,
});

const mapDispatchToProps = (dispatch) => ({
    addRemoveWish: (programswish) => dispatch(addRemoveWish(programswish)),
    getBookmarksIds: () => dispatch(getBookmarksIds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
