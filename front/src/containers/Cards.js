import { connect } from 'react-redux';
import Cards from 'src/components/Cards';
import { addToWish, getBookmarksIds } from 'src/actions/watchlist';

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
    addToWish: (programswish) => dispatch(addToWish(programswish)),
    getBookmarksIds: () => dispatch(getBookmarksIds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
