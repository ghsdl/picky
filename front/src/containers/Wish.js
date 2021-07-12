import { connect } from 'react-redux';
import Wish from 'src/components/Wish';

import { getBookmark } from 'src/actions/watchlist';
import { checkToken } from 'src/actions/profil';
const mapStateToProps = (state) => {
  return {
    wish: state.watchlist.wish,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadBookmark: () => {
    dispatch(getBookmark());
  },

  checkTokenValidity: () => {
    dispatch(checkToken());
  },
});

export default connect (mapStateToProps, mapDispatchToProps)(Wish);
