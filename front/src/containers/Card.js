import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { addRemoveWish } from 'src/actions/watchlist';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
  platforms: state.platforms.platforms,
});

const mapDispatchToProps = (dispatch) => ({
    addRemoveWish: (program) => {
    dispatch(addRemoveWish(program));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
