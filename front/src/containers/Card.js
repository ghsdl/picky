import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addToWish, removeFromWish, getBookmarksIds, getBookmark } from 'src/actions/watchlist';

const mapStateToProps = (state) => ({
  platforms: state.platforms.platforms,
  bookmarksIds: state.watchlist.bookmarksIds,
});

const mapDispatchToProps = (dispatch) => ({
    addToWish: (program) => {
      dispatch(addToWish(program));
    },
    removeFromWish: (programId) => {
      dispatch(removeFromWish(programId));
    },
    getBookmarksIds: () => dispatch(getBookmarksIds()),
    loadBookmark: () => {
      dispatch(getBookmark());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
