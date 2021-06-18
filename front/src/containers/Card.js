import { connect } from 'react-redux';
import Card from 'src/components/Card';

const mapStateToProps = (state) => ({
  inWatchList: state.watchlist.inWatchList,
  platforms: state.platforms.platforms,
});

export default connect(mapStateToProps)(Card);
