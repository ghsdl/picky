import { connect } from 'react-redux';

import About from 'src/components/About';

import { checkToken } from 'src/actions/profil';

const mapDispatchToProps = (dispatch) => ({

  checkTokenValidity: () => {
    dispatch(checkToken());
  }
});

export default connect(null, mapDispatchToProps)(About);