import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => (
  {
  movies: state.pickyFind.movies,
  shows: state.pickyFind.shows,
  loadingPlatforms: state.platforms.loadingPlatforms,
  results: state.pickyMood.results,
});

export default connect(mapStateToProps)(Cards);
