import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchPrograms } from 'src/actions/pickyFind';
import { fetchPlatforms } from 'src/actions/platforms';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  loading: state.pickyFind.loading,
  loadingPlatforms: state.pickyFind.loadingPlatforms,
});

const mapDispatchToProps = (dispatch) => ({
  loadPrograms: () => {
    dispatch(fetchPrograms());
  },
  loadPlatforms: () => {
    console.log('Jappelle loadPlatforms dans home');
    dispatch(fetchPlatforms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
