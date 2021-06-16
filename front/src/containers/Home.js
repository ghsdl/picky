import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
});

export default connect(mapStateToProps)(Home);
