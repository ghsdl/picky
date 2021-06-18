import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchPrograms } from 'src/actions/pickyFind';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  loading: state.pickyFind.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadPrograms: () => {
    dispatch(fetchPrograms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
