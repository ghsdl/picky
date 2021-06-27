import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addRemoveWish, removeFromWish, getBookmarksIds } from 'src/actions/watchlist';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
