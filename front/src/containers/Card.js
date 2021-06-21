import { connect } from 'react-redux';
import Card from 'src/components/Card';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
});

const mapDispatchToProps = dispatch => ({
  addToWatchlist:data=>dispatch(addToList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
