import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  programs: state.pickyFind.list,
});

export default connect(mapStateToProps)(Cards);
