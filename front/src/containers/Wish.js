import { connect } from 'react-redux';
import Wish from 'src/components/Wish';

const mapStateToProps = (state) => {
  return {
    wish: state.watchlist.wish,
  }
};

export default connect (mapStateToProps)(Wish);
