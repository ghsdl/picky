import { connect } from 'react-redux';
import Wish from 'src/components/Wish';

import { getBookmark } from 'src/actions/watchlist';

const mapStateToProps = (state) => {
  return {
    wish: state.watchlist.wish,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadBookmark: () => {
    dispatch(getBookmark());
  },
});

export default connect (mapStateToProps, mapDispatchToProps)(Wish);
