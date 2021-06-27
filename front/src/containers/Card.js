import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addRemoveWish, getBookmarksIds } from 'src/actions/watchlist';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
  platforms: state.platforms.platforms,
  bookmarksIds: state.watchlist.bookmarksIds,
});

const mapDispatchToProps = (dispatch) => ({
    addRemoveWish: (program) => {
    dispatch(addRemoveWish(program));
    },
    getBookmarksIds: () => dispatch(getBookmarksIds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
