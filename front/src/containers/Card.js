import { connect } from 'react-redux';
import Card from 'src/components/Card';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
});

export default connect(mapStateToProps)(Card);
