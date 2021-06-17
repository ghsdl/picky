import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';

import { changeSearchInput } from 'src/actions/search';
import { fetchPrograms } from 'src/actions/pickyFind';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeSearchInput(event.target.value));
    dispatch(fetchPrograms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
