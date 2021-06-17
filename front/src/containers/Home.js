import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchPrograms } from 'src/actions/pickyFind';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  loadPrograms: () => {
    dispatch(fetchPrograms());
  },
});

export default connect(mapStateToProps)(Home);
