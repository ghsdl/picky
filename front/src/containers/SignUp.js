import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';
import { checkToken } from 'src/actions/profil';

const mapStateToProps = (state) => ({
  
  isConnected: state.status.isConnected,
  
});

const mapDispatchToProps = (dispatch) => ({
  
  checkTokenValidity: () => {
    dispatch(checkToken());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
