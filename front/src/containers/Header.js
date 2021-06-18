/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout } from 'src/actions/user';

// plusiuers Reducer => Mettre le nom du reducer correspondant dans le mapStateToProps
const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  deconnect: () => {
    window.localStorage.clear();
    console.log('Je veux me deconnecter');
    const action = logout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
