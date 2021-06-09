import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';

import { changeSearchInput } from 'src/actions/search';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  isEmpty: state.search.isEmpty,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeSearchInput(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
