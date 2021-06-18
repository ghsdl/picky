import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { getRandomMovie, getRandomSerie} from 'src/actions/suggestions'

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  movie: state.sug.movie,
  serie: state.sug.serie,

});

const mapDispatchToProps = (dispatch) => ({
  getRandomMovie: () => {
    dispatch(getRandomMovie())
  },
  getRandomSerie: () => {
    dispatch(getRandomSerie())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
