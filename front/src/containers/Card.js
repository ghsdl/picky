import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addRemoveWish, removeFromWish, getBookmarksIds, getBookmark } from 'src/actions/watchlist';

const mapStateToProps = (state) => ({
  platforms: state.platforms.platforms,
  bookmarksIds: state.watchlist.bookmarksIds,
});

const mapDispatchToProps = (dispatch) => ({
    addRemoveWish: (program) => {
      dispatch(addRemoveWish(program));
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
