import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchPlatforms } from 'src/actions/platforms';

const mapDispatchToProps = (dispatch) => ({
  loadPlatforms: () => {
    console.log('Jappelle loadPlatforms dans home');
    dispatch(fetchPlatforms());
  },
});

export default connect(null, mapDispatchToProps)(App);
