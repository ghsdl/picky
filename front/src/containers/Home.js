import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { getRandom } from 'src/actions/suggestions';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  ranmovie: state.sug.ranmovie,

});

const mapDispatchToProps = (dispatch) => ({
  getRandom: () => {
    dispatch(getRandom())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
