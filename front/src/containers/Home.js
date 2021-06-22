import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { getRandom, reset } from 'src/actions/suggestions';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  ranmovie: state.sug.ranmovie,
  ranshow: state.sug.ranshow,
  loading: state.pickyFind.loading,
  loadingPlatforms: state.pickyFind.loadingPlatforms,
  research: state.pickyFind.research,
  isConnected: state.status.isConnected,

});

const mapDispatchToProps = (dispatch) => ({
  getRandom: () => {
    dispatch(getRandom())
  },

  resetPage: () => {
    dispatch(reset())
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
