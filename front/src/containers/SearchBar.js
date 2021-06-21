import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';

import { changeSearchInput } from 'src/actions/search';
import { fetchPrograms, changeState } from 'src/actions/pickyFind';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  research: state.pickyFind.research,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeSearchInput(event.target.value));
  },
  loadPrograms: () => {
    dispatch(fetchPrograms());
    dispatch(changeState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
