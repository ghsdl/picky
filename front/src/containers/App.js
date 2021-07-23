import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchPlatforms } from 'src/actions/platforms';
import { checkToken } from 'src/actions/profil'

const mapDispatchToProps = (dispatch) => ({
  loadPlatforms: () => {
    dispatch(fetchPlatforms());
  },

  checkTokenValidity: () => {
    dispatch(checkToken());
  }
});

export default connect(null, mapDispatchToProps)(App);
