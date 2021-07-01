import { connect } from 'react-redux';
import Cards from 'src/components/Cards';
import { addToWish, getBookmarksIds } from 'src/actions/watchlist';
import { getPickyDetails, getPickyDetailsWish } from 'src/actions/details'
const mapStateToProps = (state) => (
  {
  movies: state.pickyFind.movies,
  shows: state.pickyFind.shows,
  loadingPlatforms: state.platforms.loadingPlatforms,
  programswish: state.watchlist.programswish,
  results: state.pickyMood.results,
  wish: state.watchlist.wish,
  wishIds: state.watchlist.wishIds,
  genre: state.pickyMood.genre,
  details: state.details.program,
  genreDetails: state.details.genreDetails,
});

const mapDispatchToProps = (dispatch) => ({
    addToWish: (programswish) => dispatch(addToWish(programswish)),
    getBookmarksIds: () => dispatch(getBookmarksIds()),
    getDetails: (id, genre) => dispatch(getPickyDetails(id, genre)),
    getDetailsWish: (id, title) => dispatch(getPickyDetailsWish(id, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
