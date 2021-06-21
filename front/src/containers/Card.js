import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addToWish } from '../actions/watchlist';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
  platforms: state.platforms.platforms,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToWish: (id) => dispatch(addToWish(id)),
  };
};


export default connect(mapStateToProps)(Card);
