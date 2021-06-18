import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  movies: state.pickyFind.movies,
  shows: state.pickyFind.shows,
  loading: state.pickyFind.loading,
  loadingPlatforms: state.platforms.loadingPlatforms,
});

export default connect(mapStateToProps)(Cards);
