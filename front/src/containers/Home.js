import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { getRandom } from 'src/actions/suggestions';

import { fetchPrograms } from 'src/actions/pickyFind';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  ranmovie: state.sug.ranmovie,
  ranshow: state.sug.ranshow,
  loading: state.pickyFind.loading,
  loadingPlatforms: state.pickyFind.loadingPlatforms,
});

const mapDispatchToProps = (dispatch) => ({
  getRandom: () => {
    dispatch(getRandom())
  },
  loadPrograms: () => {
    dispatch(fetchPrograms());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
